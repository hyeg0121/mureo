const loginButton = document.getElementsByClassName('login-button')[0];

loginButton.onclick = () => {
    // TODO: 로그인 로직 구현
    const userId = 'hyeg0121';
    window.open(`../main/?id=${userId}`, '_top');
};