const clock = document.querySelector('.clock');
const btStart = document.querySelector('.start');
const btPause = document.querySelector('.pause');
const btReset = document.querySelector('.reset');

let timerIsRunning = false;

let hours = 0;
let minutes = 0;
let seconds = 0;

let interval;



btStart.addEventListener('click', function(event) {

    if(!timerIsRunning){
        timerIsRunning = true
        clock.style.color = 'black';
        btStart.disabled = true;
        btPause.disabled = false;
        interval = setInterval(generateHour, 1000);
    }
});

btPause.addEventListener('click', function(event) {
    
    if(timerIsRunning){
        timerIsRunning = false;
        clock.style.color = 'red';
        btStart.disabled = false;
        btPause.disabled = true;
        clearInterval(interval);
    }

    
});


btReset.addEventListener('click', function(event) {

    hours = 0;
    minutes = 0;
    seconds = 0;
    timerIsRunning = false;
    clock.style.color = 'black';
    btStart.disabled = false;
    btPause.disabled = false;
    clearInterval(interval);
    showTimer();
});



function generateHour() {

    seconds++;
    

    if( seconds > 59){
        seconds=0; 
        minutes++;
    }

    if( minutes > 59){
        minutes = 0;
        hours++;
    }

    if( hours > 23){
        hours = 0;
    }

    showTimer();

}


function leftZero(number) {
    return number < 10 ? `0${number}` : number;
}

function showTimer(h, m, s) {
    clock.innerText = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}`;
}
