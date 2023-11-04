const userNo = getCookie('user_no');
console.log(userNo);
const BASE_URL = 'https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app';

// input
const titleField = document.getElementById('title-field');
const contentField = document.getElementById('content-field');
const submitButton = document.getElementById('submit-button');

// select 로 바꿀 예정
let interestNo = 4;
submitButton.onclick = () => {
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
            window
        })
        .catch(error => {
            console.log(error);
            alert('서버가 응답하지 않습니다.')
        });

};

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}