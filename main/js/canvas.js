const canvas = document.getElementById("chart");
const canvasContainer = document.getElementsByClassName("canvas-containter")[0];

const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);

function resizeCanvas() {
    const containerWidth = canvasContainer.clientWidth; 
    const containerHeight = canvasContainer.clientHeight;

    console.log(containerWidth, containerHeight);
    canvas.width = containerWidth;
    canvas.height = containerHeight;

    drawOnCanvas();
}

function drawOnCanvas() {
    // Canvas에 그리고자 하는 내용을 그리는 코드를 여기에 작성
}

const ctx_ = canvas.getContext('2d');
const myChart = new Chart(ctx_, {
    type: 'bar',
    data: {
        label: '',
        labels: ['나는 개발이 좋다', 'NC 다이노스', '오일 파스텔'],
        type: 'bar',
        datasets: [{
            label: '',
            data: [3, 1, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);
