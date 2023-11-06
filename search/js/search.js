const KEYWORD = new URL(location.href).searchParams.get('keyword');

const searchField = document.getElementById('search-field');
const searchIcon = document.getElementsByClassName('search-icon')[0];
const resultListDiv = document.getElementsByClassName('result-list')[0];

showSearchResult();

searchField.onkeydown = e => {
    if (e.key === 'Enter') {
        getSearchResult();
    }
}

searchIcon.onclick = () => {
    getSearchResult();
};

function getSearchResult() {
    const keyword = searchField.value.trim();
    if (keyword === '') {
        alert('검색어를 입력하세요.');
        return;
    }

    window.open(`../search/?keyword=${keyword}`, '_top');
}

function showSearchResult() {
    axios.get(`${BASE_URL}/users/search/${KEYWORD}`)
        .then(response => {
            if (response.data.result.length == 0) {
                console.log('검색결과 없음');
                return;
            } else {
                resultListDiv.innerHTML = ''
                const results = response.data.result;
                results.forEach(result => {
                    const friendItem = document.createElement('div');
                    friendItem.className = 'friend-item';

                    // 프로필 컨테이너를 생성 
                    const friendProfileContainer = document.createElement('div');
                    friendProfileContainer.className = 'friend-profile-container';

                    // 프로필 이미지를 생성 
                    const friendImg = document.createElement('div');
                    friendImg.className = 'friend-img';
                    const img = document.createElement('img');
                    img.src = '../image/profile.png';
                    friendImg.appendChild(img);

                    // 프로필 레이블을 생성 
                    const profileLabels = document.createElement('div');
                    profileLabels.className = 'profile-labels';

                    const friendName = document.createElement('div');
                    friendName.className = 'friend-name';
                    friendName.textContent = result.user_name;

                    const friendId = document.createElement('div');
                    friendId.className = 'friend-id';
                    friendId.textContent = result.user_id;

                    profileLabels.appendChild(friendName);
                    profileLabels.appendChild(friendId);

                    // 프렌드 인터레스트를 생성 
                    const friendInterest = document.createElement('div');
                    friendInterest.className = 'friend-interest';
                    friendInterest.textContent = '폴아웃 🥊';

                    // 팔로우 버튼을 생성 
                    const followButton = document.createElement('button');
                    followButton.className = 'follow-button';
                    followButton.textContent = '팔로우 취소';

                    // 요소를 조합 
                    friendProfileContainer.appendChild(friendImg);
                    friendProfileContainer.appendChild(profileLabels);

                    friendItem.appendChild(friendProfileContainer);
                    friendItem.appendChild(friendInterest);
                    friendItem.appendChild(followButton);

                    // 부모 요소에 추가.
                    resultListDiv.appendChild(friendItem);
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}