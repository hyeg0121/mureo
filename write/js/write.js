const userNo = 1;

// input
const titleField = document.getElementById('title-field');
const contentField = document.getElementById('content-field');
const submitButton = document.getElementById('submit-button');

// select 로 바꿀 예정
let interestNo = 1;
submitButton.onclick = () => {
    const title = titleField.value;
    const content = contentField.value;

    const request = {
        title: title,
        content: content,
        interest_no: interestNo
    }; 

    axios.post('http://localhost:3000/interest/post', request)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });

};