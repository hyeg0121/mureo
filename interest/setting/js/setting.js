const infoButtonList = [...document.getElementsByClassName('info-button')];
const infoDivList = [...document.getElementsByClassName('interest-info')];

const doneButtonList = [...document.getElementsByClassName('done-button')];
const modal = document.getElementById('done-interest-modal');
const closeModalBtn = document.getElementById('close-modal-button');


infoButtonList.forEach((element, index) => {
    element.onclick = () => {
        if (infoDivList[index]) {
            infoDivList[index].classList.toggle('view');
        }
    };
});


doneButtonList.forEach((element, index) => {
    element.onclick = () => {
        modal.style.display = 'block';
    };
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.target === modal) {
        modal.style.display = "none";
    }
});