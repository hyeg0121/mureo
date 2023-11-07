const canvas = document.getElementById("chart");
const canvasContainer = document.getElementsByClassName("canvas-containter")[0];

const ctx = canvas.getContext("2d");
let colors = [];
ctx.fillRect(0, 0, canvas.width, canvas.height);

function resizeCanvas() {
    const containerWidth = canvasContainer.clientWidth; 
    const containerHeight = canvasContainer.clientHeight;

    canvas.width = containerWidth;
    canvas.height = containerHeight;

}

console.log(interestColors, interestLabels, interestPostCounts);

function rgbToRgba(rgbCode, alpha) {
    // RGB 코드에서 # 제거
    rgbCode = rgbCode.replace(/^#/, '');
  
    // R, G, B 값 추출
    const r = parseInt(rgbCode.substring(0, 2), 16);
    const g = parseInt(rgbCode.substring(2, 4), 16);
    const b = parseInt(rgbCode.substring(4, 6), 16);
  
    // RGBA 문자열 반환
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: interestLabels,
        type: 'bar',
        datasets: [{
            label: '관심사',
            data: [3, 1, 2],
            backgroundColor: [...interestColors],
            borderColor: [...interestColors],
            borderWidth: 1
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
