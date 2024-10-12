const correctPassword = "securePassword";
let userInput;

do {
    userInput = prompt("Enter your password:");
    
    if (userInput !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userInput !== correctPassword);

console.log("Access granted.");
