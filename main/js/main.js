const interestSectionLabel = document.getElementsByClassName('section-label')[0];

getUserInfoMobil();
getUsersInterest();

function getUserInfoMobil() {
    axios.get(`${BASE_URL}/users/${userNo}`)
    .then(result => {
        const user = result.data[0];
        interestSectionLabel.innerHTML = `${user.user_name}님의 관심사`;
    })
    .catch(err => {
        console.log(err);
    });
} 

function getUsersInterest() {
    axios.get(`${BASE_URL}/interest/${userNo}`) // 서버에서 데이터 가져오는 API 엔드포인트를 사용하세요
    .then(function (response) {
        const interestList = document.querySelector('.interest-list');

        response.data.forEach(function (itemData) {

            const days = calculateDaysBetweenDates(new Date(itemData.start_date), currentDate);

            // interest-item 요소 생성
            const interestItem = document.createElement('div');
            interestItem.className = 'interest-item';

            // titles 요소 생성
            const titles = document.createElement('div');
            titles.className = 'titles';

            // color 요소 생성
            const color = document.createElement('div');
            color.className = 'color';

            // color 요소 스타일, 내용 설정
            color.style.backgroundColor = itemData.color;
            titles.appendChild(color);

            // title-label 요소 생성
            const titleLabel = document.createElement('div');
            titleLabel.className = 'title-label';
            titleLabel.textContent = itemData.interest_name;
            titles.appendChild(titleLabel);

              // post-count 요소 생성
            const postCount = document.createElement('div');
            postCount.className = 'post-count';
            postCount.textContent = `작성한 글 ${getInterestPostCount(itemData.interest_no)}개`;
            // days-since 요소 생성
            const daysSince = document.createElement('div');
            daysSince.className = 'days-since';
            daysSince.textContent = `좋아한 지 ${days}일`;

            // terms 요소 생성
            const terms = document.createElement('div');
            terms.className = 'terms';
            terms.textContent = `${itemData.start_date} ~ ${itemData.end_date}` ;

            // 생성한 요소들을 interestItem에 추가
            interestItem.appendChild(titles);
            interestItem.appendChild(postCount);
            interestItem.appendChild(daysSince);
            interestItem.appendChild(terms);

            // interestItem을 interestList에 추가
            interestList.appendChild(interestItem);
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}   

async function getInterestPostCount(interestId) {
    let count =  await axios.get(`${BASE_URL}/interest/post/${interestId}`)
        .then(response => {
            console.log('getpostcount', response.data);
            console.log(response.data.result.length)

            return response.data.result.length
        })
        .catch(error => {
            console.log(error);
            
        });

    console.log('count', count);

    return count;
}







