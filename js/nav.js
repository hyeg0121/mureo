const userNo = getCookie('user_no');
const BASE_URL = "https://port-0-mureo-server-jvpb2mloi62iyf.sel5.cloudtype.app";
const desktopNameLabel = document.getElementsByClassName('name-lable')[0];

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

function getUserName() {
    axios.get(`${BASE_URL}/users/${userNo}`)
    .then(result => {
        const user = result.data[0];
        console
        desktopNameLabel.innerHTML = user.user_name;
        // TODO: 팔로우 가져오기
        
    })
    .catch(err => {
        console.log(err);
    });
} 

getUserName();




console.log(userNo);








