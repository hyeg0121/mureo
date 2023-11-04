// const userNo = getCookie('user_no');
console.log(userNo);
// const BASE_URL = 'https://port-  0-mur eo-server-jvpb2mloi62iyf.sel5.cloudtype.app';

// input
const titleField = document.getElementById('title-field');
const contentField = document.getElementById('content-field');
const submitButton = document.getElementById('submit-button');
const interestSelect = document.getElementById('category');
const interestDateDiv = document.getElementsByClassName('interest-date')[0];
const interestTitleDiv = document.getElementsByClassName('interest-title')[0];
const interestDesDiv = document.getElementsByClassName('interest-des')[0];

let interestNo = 0;
setOptions();

interestSelect.onchange = () => {
    const selectedValue = interestSelect.value;
    interestNo = parseInt(selectedValue);

    setInterestInfo(interestNo);
};

submitButton.onclick = () => {
    if (interestNo === 0) {
        interestNo = interestSelect.value;
    }

    const title = titleField.value.trim();
    const content = contentField.value;

    const request = {
        title: title,
        content: content,
        interest_no: interestNo
    }; 

    axios.post(`${BASE_URL}/interest/post`, request)
        .then(result => {
            console.log(result);
            window.open('../../interest', '_top');
        })
        .catch(error => {
            console.log(error);
            alert('서버가 응답하지 않습니다.')
        });

};

function setOptions() {
    axios.get(`${BASE_URL}/interest/${userNo}`)
    .then(response => {
        setInterestInfo(response.data[0].interest_no);
        interestNo = response.data[0].interest_no;
        response.data.forEach(interest => {
            const option = document.createElement('option');
            option.value = interest.interest_no; // 카테고리의 값
            option.textContent = interest.interest_name; // 카테고리의 표시 텍스트
            console.log(option);
            interestSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('카테고리 목록을 불러오는 중 오류 발생:', error);
    });
}

function setInterestInfo(interestNo) {
    axios.get(`${BASE_URL}/interest/${interestNo}/info`)
        .then(response => {
            const interest = response.data;

            interestDateDiv.innerHTML = interest.start_date + ' ~';
            interestTitleDiv.innerHTML = interest.interest_name;
            interestDesDiv.innerHTML = interest.reason;
        })
        .catch(error => {
            alert('서버가 응답하지 않습니다.')
            console.error('카테고리 목록을 불러오는 중 오류 발생:', error);
        });
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}