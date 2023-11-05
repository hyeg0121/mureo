const BASE_URL = "https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app";

const idField = document.getElementsByClassName('id-field')[0];
const pwField = document.getElementsByClassName('pw-field')[0];
const loginButton = document.getElementsByClassName('login-button')[0];

loginButton.onclick = () => {
    const id = idField.value.replaceAll(' ', '');
    const pw = pwField.value.replaceAll(' ', '');

    if (id === '' || pw === '') {
        alert('빈 칸이 존재합니다.');
        return;
    }

    const req = {
        "user_id": id,
        "password": pw
    };

    axios.post('https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app/login', req)
        .then(res => {
            if (res.data.result === '로그인 실패 (비번 틀림)') {
                alert('비밀번호가 알맞지 않습니다.');
                return;
            } 
            setCookie('user_no', res.data.user_no);
            console.log(res);
            console.log(res.data);
            window.open('../main/', '_top');
        })
        .catch(error => {
            alert('존재하지 않는 사용자입니다.');
            idField.value = "";
            console.log(error);
        })
};

function setCookie(name, value, unixTime) {
    var date = new Date();
    date.setTime(date.getTime() + unixTime);
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/';
}