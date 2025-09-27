let timer;
let miriseconds = 0;

function countTime() {
    miriseconds++;
    const hours = Math.floor(miriseconds / 36000);
    const minutes = Math.floor((miriseconds % 36000) / 600);
    const secs = Math.floor(((miriseconds % 36000) % 600) / 10);
    const mss = Math.floor(((miriseconds % 36000) % 600) % 10);
    document.getElementById('stopwatch').textContent =
        String(hours).padStart(2, '') + ':' +//stringは文字だよ！padstartは字数と余白
        String(minutes).padStart(2, '') + ':' +
        String(secs).padStart(2, '') +':'+
        String(mss).padStart(2, '');
    console.log(miriseconds);
}

const start = document.getElementById('button_a');
start.addEventListener('click', function() {
    timer = setInterval(countTime, 100);
    start.disabled = true;
});

const stop = document.getElementById('button_b');
stop.addEventListener('click', function() {
    clearInterval(timer);
    start.disabled = false;
});

const reset = document.getElementById('button_c');
reset.addEventListener('click', function() {
    clearInterval(timer);
    miriseconds = 0;
    document.getElementById('stopwatch').textContent = '0:0:0:0'; 
    start.disabled = false;
});

