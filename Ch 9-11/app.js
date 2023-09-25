// // Task 1 : Welcome Message with city name ----------------

// let userInput = prompt("Enter Your City Name");

// let userInputCap = userInput.toUpperCase(); // To Handle lowercase input

// if (userInputCap === "KARACHI") {
//     console.log("Welcome to city of lights");
// } else if (userInputCap === "LAHORE") {
//     console.log("Welcome to the city of Arts.");
// } else if (userInputCap === "ISLAMABAD") {
//     console.log("Welcome to the Capital City of Pakistan.");
// } else if (userInputCap === "HYDERABAD") {
//     console.log("Welcome to the city of Culture.");
// } else if (userInputCap === "MAKKAH") {
//     console.log("Welcome to the city of the Holy Mosque.");
// } else if (userInputCap === "MADINAH") {
//     console.log("Welcome to the city of the Prophet Muhammad.");
// } else {
//     console.log(`Welcome to the city of ${userInputCap}.`);
// }

// // Task 2 : Welcome Message with gender -------------------

// let userInput = prompt("What is your Gender?");

// let userInputCap = userInput.toUpperCase(); // To Handle lowercase input

// if (userInputCap === "MALE") {
//     console.log("Welcome Sir.");
// } else if (userInputCap === "FEMALE") {
//     console.log("Welcome Ma'am.");
// }

// // Task 3 : Traffic Light ----------------

// let userInput = prompt("What is the color of the traffic signal?");

// let userInputCap = userInput.toUpperCase(); // To Handle lowercase input

// if (userInputCap === "RED") {
//     console.log("Must Stop");
// } else if (userInputCap === "YELLOW") {
//     console.log("Ready to move");
// } else if (userInputCap === "GREEN") {
//     console.log("Move now");
// }

// // Task 4 : Check the fuel in car ----------------

// let userInput = prompt("Enter the remaining fuel in your car:");

// if (userInput < 0.25) {
//     console.log("Please refill the fuel in your car.");
// } else {
//     console.log("You are Good to go.");
// }

// // Task 5 : Check True or False ----------------

// // a.
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // Output: Alert message displayed

// // b.
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// // Output: Alert message not displayed

// // c.
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // Output:
// // condition 1 is true
// // condition 2 is true
// // condition 3 is true

// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // Output: Alert message displayed

// // e.
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// // Output: Alert message "True" displayed

// // f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// // Output: Alert message not displayed

// // Task 6 : marks obtained and show in browser ----------------

// const subject1Marks = Number(prompt("Enter the marks obtained in subject 1: "));
// const subject2Marks = Number(prompt("Enter the marks obtained in subject 2: "));
// const subject3Marks = Number(prompt("Enter the marks obtained in subject 3: "));
// const totalMarks = 300;

// const totalMarksObtained = subject1Marks + subject2Marks + subject3Marks;

// const percentage = ((totalMarksObtained / totalMarks) * 100);
// const roundedNumber = percentage.toFixed(2);

// let grade = "";
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// let remarks = "";
// if (percentage >= 90) {
//   remarks = "Excellent";
// } else if (percentage >= 80) {
//   remarks = "Good";
// } else if (percentage >= 70) {
//   remarks = "Average";
// } else if (percentage >= 60) {
//   remarks = "Below Average";
// } else {
//   remarks = "Fail";
// }

// document.write("<h1>Marks Sheet</h1>")
// document.write("<p><b>Total Marks:</b> " + totalMarks + "</p>")
// document.write("<p><b>Marks Obtained:</b> " + totalMarksObtained + "</p>")
// document.write("<p><b>Percentage:</b> " + roundedNumber + "%</p>")
// document.write("<p><b>Grade:</b> " + grade + "</p>")
// document.write("<p><b>Remarks:</b> " + remarks + "</p>")

// // Task 7 : Guess Game ----------------

// let secretNumber = Math.trunc(Math.random() * 10) + 1;

// while (true) {
//   let userGuess = Number(prompt("Guess the secret number (ranging from 1 to 10):"));

//   if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
//     break; // Exit the loop when the correct answer is guessed
//   } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Wrong answer");
//   }
// }

// // Task 8 : Check Number is divisible by 3 ----------------

// let num = Number(prompt("Enter a number to check whether it is divisible by 3:"));

// if (num % 3 === 0) {
//   alert(`${num} is divisible by 3`);
// } else {
//   alert(`${num} is not divisible by 3`);
// }

// // Task 9 : Check if even number or an odd number ----------------

// const userNumber = Number(prompt("Enter a number:"));

// if (userNumber % 2 === 0) {
//   alert(`${userNumber} is an even number.`);
// } else {
//   alert(`${userNumber} is an odd number.`);
// }

// // Task 10 : Check Temperature ----------------

// const temperature = Number(prompt("Enter the temperature:"));

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's freezing outside!");
// }

// // Task 11 :  ----------------

// const firstNumber = Number(prompt("Enter the first number:"));
// const secondNumber = Number(prompt("Enter the second number:"));
// const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;
// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   if (secondNumber === 0) {
//     alert("Division by zero is not allowed.");
//   } else {
//     result = firstNumber / secondNumber;
//   }
// } else if (operation === "%") {
//   if (secondNumber === 0) {
//     alert("Modulus by zero is not allowed.");
//   } else {
//     result = firstNumber % secondNumber;
//   }
// } else {
//   alert("Invalid operation. Please enter +, -, *, /, or %.");
// }

// if (result !== undefined) {
//   alert(`Result: ${result}`);
// }
