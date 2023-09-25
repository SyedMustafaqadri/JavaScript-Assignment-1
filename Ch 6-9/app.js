// // Task 1: Program to calculate and display result

// document.write("<h2>Task 1: Program to calculate and display result</h2>");
// document.write("<h3>Result:</h3>");
// let a = 10;
// document.write("<p>The value of <b>a</b> is: " + a + "</p><br>");
// document.write("<hr style='border: 1px solid black;'><br>");
// document.write("<p>The value of <b>++a</b> is: " + ++a + "</p>");
// document.write("<p>Now the value of <b>a</b> is: " + a + "</p><br>");
// document.write("<p>The value of <b>a++</b> is: " + a++ + "</p>");
// document.write("<p>Now the value of <b>a</b> is: " + a + "</p><br>");
// document.write("<p>The value of <b>--a</b> is: " + --a + "</p>");
// document.write("<p>Now the value of <b>a</b> is: " + a + "</p><br>");
// document.write("<p>The value of <b>a--</b> is: " + a-- + "</p>");
// document.write("<p>Now the value of <b>a</b> is: " + a + "</p><br>");

// // Task 2: greet the user
// let userName = prompt("What is your name?");
// document.write("Hello " + userName);

// // Task 3: Variable output
// let A = 2, B = 1;
// let result = --A - --B;
// document.write("<h2>Task 2: Variable output:</h2>");
// document.write("<b>A:</b> " + A + "<br>");
// document.write("<b>B:</b> " + B + "<br>");
// document.write("<b>Result:</b> " + result + "<br>");

// // Task 4: Marks Sheet in Table

// let subject1 = "English";
// let subject2 = "Mathematics";
// let subject3 = "Physics";

// let totalMarks = 100;
// let obtainedMarks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
// let obtainedMarks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
// let obtainedMarks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));
// let sub1Percentage = (obtainedMarks1 / totalMarks) * 100;
// let sub2Percentage = (obtainedMarks2 / totalMarks) * 100;
// let sub3Percentage = (obtainedMarks3 / totalMarks) * 100;
// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + sub1Percentage + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + sub2Percentage + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + sub3Percentage + "%</td></tr>");
// document.write("<tr><td>          </td><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th><th>" + percentage + "%</th></tr>");
// document.write("</table><br>");

