// // Task 1: Empty Array -------------------

// let studentNamesLiteral = [];

// // Task 2: empty array using JS object notation to store student names -------------------

// let studentNamesObject = new Array();

// // Task 3: Declare and initialize a strings array: -------------------

// let stringsArray = ["apple", "banana", "cherry"];

// // Task 4: Declare and initialize a numbers array: -------------------

// let numbersArray = [1, 2, 3, 4, 5];

// // Task 5: Declare and initialize a boolean array: -------------------

// let booleanArray = [true, false];

// // Task 6: Declare and initialize a mixed array: -------------------

// let mixedArray = ["apple", 1, true];

// // Task 7: Declare and initialize an array and store available education qualifications in Pakistan: -------------------

// const educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ol>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write(`<li>${educationQualifications[i]}</li>`);
// }
// document.write("</ol>");

// // Task 8: scores and percentages for each student -------------------

// const studentNames = ["Mustafa", "Ibrahim", "Abdullah"];
// const studentScores = [450, 380, 420];
// const totalMarks = 500;
// const studentPercentages = [];

// for (let i = 0; i < studentScores.length; i++) {
//     const percentage = (studentScores[i] / totalMarks) * 100;
//     studentPercentages.push(percentage);
// }

// for (let i = 0; i < studentNames.length; i++) {
//     document.write(`<p>Score of ${studentNames[i]} is ${studentScores[i]} out of ${totalMarks}, and their percentage is ${studentPercentages[i]}%.</p>`);
// }