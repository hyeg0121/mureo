const BASE_URL = "https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app";

const idField = document.getElementsByClassName('id-field')[0];
const pwField = document.getElementsByClassName('pw-field')[0];
const loginButton = document.getElementsByClassName('login-button')[0];

loginButton.onclick = () => {
    const id = idField.value;
    const pw = pwField.value;

    const req = {
        "user_id": id,
        "password": pw
    };

    axios.post('https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app/login', req)
        .then(res => {
            setCookie('user_no', res.data.user_no);
            console.log(res.data);
            window.open('../main/', '_top');
        })
        .catch(error => {
            console.log(error)
        })
};

function setCookie(name, value, unixTime) {
    var date = new Date();
    date.setTime(date.getTime() + unixTime);
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/';
}