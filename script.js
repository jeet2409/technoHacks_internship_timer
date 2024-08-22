let countdown;
let isRunning = false;
let timeLeft = 0; 

function setTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    timeLeft = minutes * 60 + seconds; 
    displayTime(timeLeft);
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    countdown = setInterval(() => {
        timeLeft--;
        displayTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            isRunning = false;
           
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 0; 
    displayTime(timeLeft);
    isRunning = false;
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    document.getElementById('time').textContent = formattedTime;                   
}

// Initialize the display with the initial time
displayTime(timeLeft);
