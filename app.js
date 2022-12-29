let sec = document.getElementById('sec');
let milSec = document.getElementById('milSec');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let second = 0;
let millisec = 0;
let timeInterval;

const timer = () => {
    millisec++
    

    if ( millisec < 9) {
        milSec.innerHTML = "0" + millisec;
    }

    if (millisec > 9) {
        milSec.innerHTML = millisec;
    }

    if (millisec > 99) {
        second++;
        sec.innerHTML = "0" + second;
        millisec = 0;
        millisec.innerHTML = "0" + 0
    }

    if (second > 9) {
        sec.innerHTML = second;
    }
}

//start button
start.addEventListener('click', () => {
    timeInterval = setInterval(timer, 10);
})

//stop button

stop.addEventListener('click',()=> {
    clearInterval(timeInterval);
})

//reset button
reset.addEventListener('click', () => {
    clearInterval(timeInterval);
    second = "00";
    millisec = "00";
    sec.innerHTML = second;
    milSec.innerHTML = millisec;
    console.log(sec);
})