// Function to handle the countdown
function startCountdown() {
    let countdownElement = document.getElementById('count') as HTMLDivElement;
    let countdownContainer = document.getElementById('countdown-container')
    let count = 10;
    let intervalId: number;

    function updateCountdown() {
        if (count > 0) {
            countdownElement.textContent = count.toString();
            count--;
        } else {
            countdownElement.textContent = '0';
            clearInterval(intervalId);
            countdownContainer.style.display = 'none';
        }
    }

    intervalId = setInterval(updateCountdown, 1000);
}

// Adding event listener to call startCountdown on window load
window.addEventListener('load', startCountdown);
