// // Task 1: Addition
// document.write("<h2>Task 1&2: Addition, Subtraction, Multiplication, Division, Modulus</h2>");
// let num1 = prompt("Enter a number:");
// let num2 = prompt("Enter another number:");
// let sum = Number(num1) + Number(num2);
// document.write("The result of addition is: " + sum + "<br>");

// // Task 2: Subtraction, Multiplication, Division, Modulus
// let difference = num1 - num2;
// document.write("The result of subtraction is: " + difference + "<br>");

// let product = num1 * num2;
// document.write("The result of multiplication is: " + product + "<br>");

// let quotient = num1 / num2;
// document.write("The result of division is: " + quotient + "<br>");

// let remainder = num1 % num2;
// document.write("The remainder is: " + remainder + "<br>");

// // Task 3: Using JS Mathematical Expressions
// document.write("<h2>Task 3: Using JS Mathematical Expressions</h2>");
// let someNumber;
// document.write("Value after variable declaration is: " + someNumber + "<br>");

// someNumber = 5;
// document.write("Initial value: " + someNumber + "<br>");

// someNumber++;
// document.write("Value after increment is: " + someNumber + "<br>");

// someNumber += 7;
// document.write("Value after addition is: " + someNumber + "<br>");

// someNumber--;
// document.write("Value after decrement is: " + someNumber + "<br>");

// let remainderBy3 = someNumber % 3;
// document.write("The remainder is: " + remainderBy3 + "<br>");

// // Task 4: Cost of movie tickets
// document.write("<h2>Task 4: Cost of movie tickets</h2>");
// let ticketPrice = 600;
// let numberOfTickets = 5;
// let totalTicketCost = ticketPrice * numberOfTickets;
// document.write("Total cost for buying 5 tickets is: " + totalTicketCost + "<br>");

// // Task 5: Multiplication table
// document.write("<h2>Task 5: Multiplication table</h2>");
// let number = prompt("Enter a number to display its table:");
// let table = "";
// for (let i = 1; i <= 10; i++) {
//     table += `${Number(number)} x ${i} = ${Number(number) * i}<br>`;
// }
// document.write(table);

// // Task 6: Temperature Converter
// document.write("<h2>Task 6: Temperature Converter</h2>");
// let celsiusTemperature = 25;
// let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");

// let fahrenheitTemperature2 = 77;
// let celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C" + "<br>");

// // Task 7: Checkout process
// document.write("<h2>Task 7: Checkout process</h2>");
// let priceItem1 = 500;
// let priceItem2 = 300;
// let quantityItem1 = 2;
// let quantityItem2 = 3;
// let shippingCharges = 50;
// let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("Price of Item 1: " + priceItem1 + "<br>");
// document.write("Price of Item 2: " + priceItem2 + "<br>");
// document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
// document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
// document.write("Shipping Charges: " + shippingCharges + "<br>");
// document.write("Total Cost: " + totalCost);

// // Task 8: Percentage Calculation
// document.write("<h2>Task 8: Percentage Calculation</h2>");
// let totalMarks = 500;
// let marksObtained = Number(prompt("Enter marks obtained Out Of 500:"));
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");

// // Task 9: Currency Conversion
// document.write("<h2>Task 9: Currency Conversion</h2>");
// let usDollars = 10;
// let saudiRiyals = 25;
// let exchangeRateDollarToRupee = 307;
// let exchangeRateRiyalToRupee = 79;
// let totalRupees = (usDollars * exchangeRateDollarToRupee) + (saudiRiyals * exchangeRateRiyalToRupee);
// document.write("Total currency in Pakistani Rupees: " + totalRupees + "<br>");

// // Task 10: Arithmetic Sequence
// document.write("<h2>Task 10: Arithmetic Sequence</h2>");
// let someNumber1 = prompt("Enter a number for Arithmetic Sequence:");
// let result = (((someNumber1 + 5) * 10) / 2);
// document.write("Number: " + someNumber1 + "<br>");
// document.write("Your number will be add 5, multiply by 10 and divided by 2" + "<br>");
// document.write("Result: " + result + "<br>");

// // Task 11: Age Calculator
// document.write("<h2>Task 11: Age Calculator</h2>");
// let currentYear = 2023;
// let birthYear = 2005;
// let age1 = currentYear - birthYear;
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your age is: " + age1 + "<br>");

// // Task 12: Geometrize
// document.write("<h2>Task 12: Geometrize</h2>");
// let radius = 5;
// let circumference = 2 * 3.14159 * radius;
// let area = 3.14159 * radius * radius;
// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area + "<br>");

// // Task 13: Lifetime Supply Calculator
// document.write("<h2>Task 13: Lifetime Supply Calculator</h2>");
// let favoriteSnack = "Chocolate Bars";
// let currentAge = 18;
// let maxAge = 80;
// let snacksPerDay = 2;
// let totalSnacks = (maxAge - currentAge) * 365 * snacksPerDay;
// document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
