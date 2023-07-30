// Get user input elements
const desireInput = document.getElementById('desire');
const emotionInput = document.getElementById('feelings');

// No need for submitButton as we are handling form submit event in HTML

// Function to process desire input
function processDesireInput() {
    // Get user input value
    const desire = desireInput.value;

    // Check if the input is not empty
    if (desire) {
        // Process the input
        // This is where we will add more functionality
        console.log(`Desire: ${desire}`);
    } else {
        console.log("Please fill in the desire field.");
    }
}

// Function to process feeling input
function processFeelingInput() {
    // Get user input value
    const emotion = emotionInput.value;

    // Check if the input is not empty
    if (emotion) {
        // Process the input
        // We'll use the OpenAI API to generate a "vibration score"
        generateVibrationScore(emotion)
            .then(score => {
                console.log(`Vibration Score: ${score}`);
                // Here, you would typically update the UI with the vibration score
            })
            .catch(error => {
                console.error(`Error generating vibration score: ${error}`);
            });
    } else {
        console.log("Please fill in the feeling field.");
    }
}

function generateVibrationScore(emotion) {
    // This is a placeholder for the actual request to your server, which would then call the OpenAI API
    // The exact code would depend on the specifics of your server and how you have set up the API call
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            resolve(Math.random());  // Simulate a vibration score as a random number for now
        }, 2000);
    });
}

// Make these functions global to access from index.html
window.processDesireInput = processDesireInput;
window.processFeelingInput = processFeelingInput;
