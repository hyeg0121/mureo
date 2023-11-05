const desktopNameLabel = document.getElementsByClassName('name-lable')[0];

function getUserName() {
    axios.get(`${BASE_URL}/users/${userNo}`)
    .then(result => {
        const user = result.data[0];
        desktopNameLabel.innerHTML = user.user_name;
        // TODO: 팔로우 가져오기
        
    })
    .catch(err => {
        console.log(err);
    });
} 

getUserName();




console.log(userNo);








