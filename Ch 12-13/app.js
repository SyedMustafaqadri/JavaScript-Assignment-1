// // Task 1: Prompt the user to enter a character

// const userInput = prompt("Enter a character (number or string):");
// const charCode = userInput.charCodeAt(0);
// let message;
// if (Number(userInput)) {
//     message = "The input is a number.";
// } else if (charCode >= 65 && charCode <= 90) {
//     message = "The input is an uppercase letter.";
// } else if (charCode >= 97 && charCode <= 122) {
//     message = "The input is a lowercase letter.";
// } else {
//     message = "The input is not recognized as a number, uppercase letter, or lowercase letter.";
// }
// alert(message);

// // Task 2: accept two integers and display the larger.

// const firstInteger = parseInt(prompt("Enter the first integer:"));
// const secondInteger = parseInt(prompt("Enter the second integer:"));
// let message;

// if (firstInteger === secondInteger) {
//     message = "The two integers are equal.";
// } else if (firstInteger > secondInteger) {
//     message = `The larger integer is: ${firstInteger}`;
// } else {
//     message = `The larger integer is: ${secondInteger}`;
// }
// alert(message);

// // Task 3: Check if the number is positive, negative, or zero

// const number = Number(prompt("Enter a number:"));

// let message;
// if (number > 0) {
//     message = "The number is positive.";
// } else if (number < 0) {
//     message = "The number is negative.";
// } else {
//     message = "The number is zero.";
// }
// alert(message);

// // Task 4: Check if the character is a vowel

// const character = prompt("Enter a single character:").toLowerCase();

// const isVowel = ['a', 'e', 'i', 'o', 'u'].includes(character);

// if (isVowel) {
//     alert(`'${character}' is a vowel.`);
// } else {
//     alert(`'${character}' is not a vowel.`);
// }

// // Task 5: Check if the user has entered a password

// const correctPassword = "admin123";
// while (true) {
//     const userPassword = prompt("Enter your password:");
//     if (!userPassword) {
//         alert("Please enter your password.");
//     } else {
//         // Check if the entered password matches the correct password
//         if (userPassword === correctPassword) {
//             alert("Correct! The password you entered matches the original password.");
//             break;
//         } else {
//             alert("Incorrect password.");
//         }
//     }
// }

// // Task 6: Correct the code

// let greeting;
// let hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// // Take 7: Greeting According to Time

// const userInput = Number(prompt("Enter time in 24-hour clock format (e.g., 1900):"));
// let timePeriod;

// if (userInput >= 0 && userInput < 1200) {
//     timePeriod = "Good morning!";
// } else if (userInput >= 1200 && userInput < 1700) {
//     timePeriod = "Good afternoon!";
// } else if (userInput >= 1700 && userInput < 2000) {
//     timePeriod = "Good evening!";
// } else if (userInput >= 2000 && userInput <= 2400) {
//     timePeriod = "Good night!";
// } else {
//     timePeriod = "Invalid input. Please enter a valid time in 24-hour format.";
// }

// alert(timePeriod);
