// Variables to store timer state
let intervalId: number | undefined;
let timeLeft = 00 * 60; // 10 minutes in seconds
let isPaused = true;

// Function to format time in mm:ss
function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimerDisplay(): void {
    const timerElement = document.getElementById('time') as HTMLDivElement;
    timerElement.textContent = formatTime(timeLeft);
}

// Function to start the countdown
function startCountdown(): void {
  const timeInput = document.getElementById('minutes') as HTMLInputElement; const minutes = parseInt(timeInput.value);
    if (!isNaN(minutes)) { 
      timeLeft = minutes * 60;
       // Convert minutes to seconds 
       isPaused = false; 
       if (intervalId === undefined) { 
        intervalId = setInterval(() => { 
          if (!isPaused && timeLeft > 0) {
             timeLeft--;
              updateTimerDisplay();
             } else if (timeLeft === 0) { clearInterval(intervalId);
               intervalId = undefined;
               }
               }, 1000);
               } updateTimerDisplay();
               } else { alert('Please enter a valid number of minutes.'); } }

// Function to pause the countdown
function pauseCountdown(): void {
    isPaused = true;
}

// Function to resume the countdown
function resumeCountdown(): void {
    isPaused = false;
    startCountdown();
}

// Function to reset the countdown
function resetCountdown(): void {
    clearInterval(intervalId);
    intervalId = undefined;
    timeLeft = 10 * 60; // Reset to 10 minutes
    isPaused = true;
    updateTimerDisplay();
}

// Adding event listeners to buttons
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const pauseButton = document.getElementById('pause-button') as HTMLButtonElement;
const resetButton = document.getElementById('restart-button') as HTMLButtonElement;

startButton.addEventListener('click', resumeCountdown);
pauseButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetCountdown);

// Initial display update
updateTimerDisplay();
