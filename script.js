// Get modal element and close button
const loginModal = document.getElementById('loginModal');
const closeButton = document.querySelector('#loginModal .close');

// When the user clicks on the close button (X), close the modal
closeButton.onclick = function() {
    loginModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
};

function submitFeedback() {
    const name = document.getElementById('feedbackName').value;
    const message = document.getElementById('feedbackMessage').value;

    // Basic response for the demonstration
    document.getElementById('feedbackResponse').innerHTML = `Thank you, ${name}, for your feedback!`;
}


// Toggle between login and signup forms
function toggleForm(formType) {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');
    
    if (formType === 'signup') {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    } else {
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Open modal
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Mock Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('loginMessage').textContent = `Welcome, ${username}!`; // Example message
}

// Mock Sign Up function
function signUp() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    document.getElementById('loginMessage').textContent = `Account created for ${newUsername}!`; // Example message
}

// Event listener to open modal when "Get Started" button is clicked
document.getElementById('getStarted').onclick = openModal;


// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Simple username/password check for demo
    if (username === 'user' && password === 'pass') {
        message.style.color = 'green';
        message.innerText = 'Login successful!';
        setTimeout(() => {
            loginModal.style.display = 'none'; // Close modal after successful login
        }, 1000); // Delay for effect
    } else {
        message.style.color = 'red';
        message.innerText = 'Invalid username or password.';
    }
}
function calculateCarbon() {
    const transport = parseFloat(document.getElementById('transport').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const meat = parseFloat(document.getElementById('meat').value);
    const waste = parseFloat(document.getElementById('waste').value);
    const water = parseFloat(document.getElementById('water').value);
    const airTravel = parseFloat(document.getElementById('airTravel').value);

    // Constants for carbon emission factors (tons of CO2 per unit of input)
    const transportFactor = 0.21;     // kg CO2 per km
    const electricityFactor = 0.92;   // kg CO2 per kWh
    const gasFactor = 2.204;          // kg CO2 per cubic meter of gas
    const meatFactor = 27;            // kg CO2 per kg of meat per week
    const wasteFactor = 0.7;          // kg CO2 per kg of waste per week
    const waterFactor = 0.0003;       // kg CO2 per liter of water used per day
    const airTravelFactor = 90;       // kg CO2 per hour of flight per year

    // Carbon footprint calculation
    const transportCarbon = transport * transportFactor * 52 / 1000;
    const electricityCarbon = electricity * electricityFactor * 12 / 1000;
    const gasCarbon = gas * gasFactor * 12 / 1000;
    const meatCarbon = meat * meatFactor * 52 / 1000;
    const wasteCarbon = waste * wasteFactor * 52 / 1000;
    const waterCarbon = water * waterFactor * 365 / 1000;
    const airTravelCarbon = airTravel * airTravelFactor / 1000;

    const totalCarbon = transportCarbon + electricityCarbon + gasCarbon + meatCarbon + wasteCarbon + waterCarbon + airTravelCarbon;

    // Display the result and breakdown
    document.getElementById('result').innerHTML = `
        <p>Your estimated annual carbon footprint is <strong>${totalCarbon.toFixed(2)} tons</strong> of CO2.</p>
        <h3>Breakdown:</h3>
        <ul>
            <li>Transport: ${transportCarbon.toFixed(2)} tons</li>
            <li>Electricity: ${electricityCarbon.toFixed(2)} tons</li>
            <li>Gas: ${gasCarbon.toFixed(2)} tons</li>
            <li>Meat: ${meatCarbon.toFixed(2)} tons</li>
            <li>Waste: ${wasteCarbon.toFixed(2)} tons</li>
            <li>Water: ${waterCarbon.toFixed(2)} tons</li>
            <li>Air Travel: ${airTravelCarbon.toFixed(2)} tons</li>
        </ul>
        <p>${getSuggestions(totalCarbon, { transportCarbon, electricityCarbon, gasCarbon, meatCarbon, wasteCarbon, waterCarbon, airTravelCarbon })}</p>
    `;
}

function getSuggestions(totalCarbon, breakdown) {
    let suggestions = "Here are some suggestions to reduce your carbon footprint:<br>";

    if (breakdown.transportCarbon > 1) suggestions += "- Consider carpooling or using public transport.<br>";
    if (breakdown.electricityCarbon > 1) suggestions += "- Switch to energy-efficient appliances and reduce usage.<br>";
    if (breakdown.gasCarbon > 1) suggestions += "- Improve home insulation to reduce heating needs.<br>";
    if (breakdown.meatCarbon > 1) suggestions += "- Try reducing meat consumption or switching to plant-based meals.<br>";
    if (breakdown.wasteCarbon > 1) suggestions += "- Recycle and reduce waste wherever possible.<br>";
    if (breakdown.waterCarbon > 0.1) suggestions += "- Reduce water usage with efficient fixtures and mindful habits.<br>";
    if (breakdown.airTravelCarbon > 0.5) suggestions += "- Opt for fewer flights or consider carbon offset programs.<br>";

    return suggestions;
}

function completeChallenge(challengeId) {
    const messages = [
        "Great job! Keep reducing your transport emissions!",
        "Nice work! Reducing meat consumption helps lower your footprint.",
        "Awesome! You're saving energy by unplugging unused devices."
    ];
    
    document.getElementById("challengeMessage").innerHTML = messages[challengeId - 1];
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function completeChallenge(challengeId) {
    const messages = [
        "Great job! Keep reducing your transport emissions!",
        "Nice work! Reducing meat consumption helps lower your footprint.",
        "Awesome! You're saving energy by unplugging unused devices."
    ];

    // Set the challenge completion message
    document.getElementById("challengeMessage").innerText = messages[challengeId - 1];

    // Show the modal
    document.getElementById("completionModal").style.display = "block";
}

function closeModal() {
    // Hide the modal
    document.getElementById("completionModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("completionModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

let score = 0;
const rewardMessage = document.getElementById('rewardMessage');
const scoreElement = document.getElementById('score');

// Function to complete a challenge
function completeChallenge(challengeNumber) {
    let points = 0;
    let message = '';

    switch (challengeNumber) {
        case 1:
            points = 10; // Award 10 points for Challenge 1
            message = "Great job! You've completed the challenge to walk or bike more!";
            break;
        case 2:
            points = 15; // Award 15 points for Challenge 2
            message = "Fantastic! You've reduced your meat consumption for a healthier planet!";
            break;
        case 3:
            points = 5; // Award 5 points for Challenge 3
            message = "Well done! You've reduced your power consumption!";
            break;
        default:
            message = "Unknown challenge.";
    }

    // Update the score
    score += points;
    scoreElement.textContent = score;

    // Show the message in the modal or alert
    alert(message); // or use modal if desired
    checkRewards();
}

// Function to check for rewards based on score
function checkRewards() {
    if (score >= 30 && score < 50) {
        rewardMessage.textContent = "Reward: You’ve earned a Bronze Badge!";
    } else if (score >= 50 && score < 70) {
        rewardMessage.textContent = "Reward: You’ve earned a Silver Badge!";
    } else if (score >= 70) {
        rewardMessage.textContent = "Reward: You’ve earned a Gold Badge! Keep going!";
    } else {
        rewardMessage.textContent = ''; // Clear reward message if not eligible
    }
}

document.querySelectorAll('.solution').forEach(solution => {
    solution.addEventListener('mouseenter', () => {
        const steps = solution.querySelector('.steps');
        steps.style.display = 'block';
    });
    
    solution.addEventListener('mouseleave', () => {
        const steps = solution.querySelector('.steps');
        steps.style.display = 'none';
    });
});
