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

    axios.post('http://localhost:3000/login', req)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res));
            window.open('../main/', '_top');
        })
        .catch(error => {
            console.log(error)
        })
};
