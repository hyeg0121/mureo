const BASE_URL = "https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app";

const nameField = document.getElementsByClassName('name-field')[0];
const idField = document.getElementsByClassName('id-field')[0];
const pwField = document.getElementsByClassName('pw-field')[0];
const pwcheckField = document.getElementsByClassName('pwcheck-field')[0];
const emailField = document.getElementsByClassName('email-field')[0];
const joinButton = document.getElementsByClassName('join-button')[0];

joinButton.onclick = () => {
    // 유효성 아직 안함
    const name = nameField.value;
    const id = idField.value;
    const pw = pwField.value;
    const pwcheck = pwcheckField.value;
    const email = emailField.value;
    
    if (name === "" || id === "" || pw === "" || pwcheck === "" || email === "") {
        alert('빈 칸이 존재합니다.');
        return;
    }

    if (pw !== pwcheck) {
        alert('비밀번호가 다릅니다.');
        return;
    }

    const req = {
        "user_name": name,
        "user_id": id,
        "password": pw,
        "email": email
    }

    axios.post(`${BASE_URL}/register`, req)
        .then(res => {
            console.log(res);
            window.open('../', '_top');

        })
        .catch(error => {
            console.error(error);
        });


};