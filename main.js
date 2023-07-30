// Get user input elements
const desireInput = document.getElementById('desire-input');
const emotionInput = document.getElementById('emotion-input');

// Get button element
const submitButton = document.getElementById('submit-button');

// Add event listener to the button
submitButton.addEventListener('click', processInput);

function processInput() {
    // Get user input values
    const desire = desireInput.value;
    const emotion = emotionInput.value;

    // Check if the inputs are not empty
    if (desire && emotion) {
        // Process the input
        // This is where we will add more functionality
        console.log(`Desire: ${desire}, Emotion: ${emotion}`);
    } else {
        console.log("Please fill in both fields.");
    }
}

function processInput() {
    // Get user input values
    const desire = desireInput.value;
    const emotion = emotionInput.value;

    // Check if the inputs are not empty
    if (desire && emotion) {
        // Process the input
        // We'll use the OpenAI API to generate a "vibration score"
        generateVibrationScore(desire, emotion)
            .then(score => {
                console.log(`Vibration Score: ${score}`);
                // Here, you would typically update the UI with the vibration score
            })
            .catch(error => {
                console.error(`Error generating vibration score: ${error}`);
            });
    } else {
        console.log("Please fill in both fields.");
    }
}

function generateVibrationScore(desire, emotion) {
    // This is a placeholder for the actual request to your server, which would then call the OpenAI API
    // The exact code would depend on the specifics of your server and how you have set up the API call
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            resolve(Math.random());  // Simulate a vibration score as a random number for now
        }, 2000);
    });
}
