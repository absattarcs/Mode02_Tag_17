// Function to handle the countdown
function startCountdown() {
    let progressBar = document.getElementById('text-bar') as HTMLDivElement;
    let width = 100;
    let intervalId: number;

    function updateProgressBar() {
        if (width > 0) {
            width--;
            // progressBar.style.width = width + '%';
             progressBar.textContent = width + '%';
        } else {
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(updateProgressBar, 100);
}

// Adding event listener to the button
let startButton = document.getElementById('startButton') as HTMLButtonElement;
startButton.addEventListener('click', startCountdown);
