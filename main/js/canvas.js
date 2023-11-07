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
    drawChart();
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

async function drawChart() {

    interestColors = [];
    interestLabels = [];
    interestPostCounts = [];

    await getUsersInterest();

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: interestLabels.reverse(),
            type: 'line',
            datasets: [{
                label: '관심사',
                data: interestPostCounts,
                backgroundColor: rgbToRgba(interestColors, 1),
                borderColor: ['rgba(37, 168, 224, 1)'],
                borderWidth: 5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 14,
                            family: 'Pretendard-Regular'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            title: {
                display: true,
                text: '관심사 분석',
              }
        }
    });

}

function rgbToRgba(rgbCodes, alpha) {
    let colors = [];
    for (let rgbCode of rgbCodes) {

        rgbCode = rgbCode.replace(/^#/, '');

        const r = parseInt(rgbCode.substring(0, 2), 16);
        const g = parseInt(rgbCode.substring(2, 4), 16);
        const b = parseInt(rgbCode.substring(4, 6), 16);

        // RGBA 문자열 반환
        console.log(`rgba(${r}, ${g}, ${b}, ${alpha})`);
        colors.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
    }

    return colors;
}
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);