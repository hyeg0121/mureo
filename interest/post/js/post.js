// const userNo = getCookie('user_no');
console.log(userNo);
// const BASE_URL = 'https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app';

const titleField = document.getElementById('title-field');
const dateField = document.getElementById('date-field');
const reasonField = document.getElementById('reason-field');
const colorField = document.getElementById('color-field');
const submitButton = document.getElementById('submit-button');


submitButton.onclick = () => {
    const title = titleField.value;
    const date = dateField.value;
    const reason = reasonField.value;
    const color = colorField.value;
    
    const request = {
        user_no: userNo,
        interest_name: title,
        start_date: date,
        end_date: "",
        reason: reason,
        color: color
    };

    axios.post(`${BASE_URL}/interest`, request)
        .then(result => {
            window.open('../setting/', '_top');
        })
        .catch(error => {
            console.log('failure: ', error);
        })
    console.log('req:', request);
};

function getFormatDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

dateField.value = getFormatDate();

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}