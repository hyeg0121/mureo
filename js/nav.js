const nameLabels = [...document.getElementsByClassName('name-lable')]
const idLabels = [...document.getElementsByClassName('id-label')];
const followingValueDivs = [...document.getElementsByClassName('following-value')];
const followerValueDivs = [...document.getElementsByClassName('follower-value')];

getUserDesktopProfile();
getUserFollowingCount();
getUserFollowerCount();

function getUserDesktopProfile() {
    axios.get(`${BASE_URL}/users/${userNo}`)
    .then(result => {
        nameLabels.forEach(e => {
            e.innerHTML = result.data[0].user_name;
        });

        idLabels.forEach(e => {
            e.innerHTML = result.data[0].user_id;
        })
    })
    .catch(err => {
        console.log(err);
    });
} 

function getUserFollowingCount() {
    axios.get(`${BASE_URL}/followings/${userNo}`)
        .then(response => {
            followingValueDivs.forEach(e => {
                e.innerHTML = response.data.length;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function getUserFollowerCount() {
    axios.get(`${BASE_URL}/followers/${userNo}`)
        .then(response => {
            followerValueDivs.forEach(e => {
                e.innerHTML = response.data.length;
            });
        })
        .catch(error => {
            console.log(error);
        });
}




console.log(userNo);








