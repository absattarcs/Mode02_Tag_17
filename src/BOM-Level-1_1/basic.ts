// Function to display text after x seconds
function displayTextAfterSeconds(text: string, seconds: number): void {
    setTimeout(() => {
        console.log(text);
    }, seconds * 1000);
}

// Example usage of displayTextAfterSeconds
displayTextAfterSeconds("Hello after 3 seconds", 3);

// Function to output a specific result using setInterval, clearInterval, and if/else
function outputResult() {
    let counter = 10;
    const intervalId = setInterval(() => {
        if (counter >1) {
            console.log(`Count: ${counter}`);
            counter--;
        } else {
            clearInterval(intervalId);
            console.log("Completed");
        }
    }, 1000);
}

// Example usage of outputResult
outputResult();
