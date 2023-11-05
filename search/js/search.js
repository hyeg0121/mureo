const KEYWORD= new URL(location.href).searchParams.get('keyword');

const searchField = document.getElementById('search-field');
const searchIcon = document.getElementsByClassName('search-icon')[0];

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
            console.log(response);
            if ( response.data.message = '해당하는 사용자가 없습니다.') {
                return;
            } else {
                console.log(response);
            }
        })
        .catch(error => {
            console.log(error);
        });
}