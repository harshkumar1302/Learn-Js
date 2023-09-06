// // Assignment 1

// let country = "India";
// let continent = "Asia";
// let population = `${456} millions`;

// console.log(`${continent} is a huge continent in which ${country} is a big country with a population of ${population}.`);






// // Coding Challenge 1

// // Mark and John are trying to compare their BMI(Body Mass Index), which is
// // calculated using the formula:
// // BMI = mass / height ** 2 = mass / (height * height)(mass in kg
// // and height in meter).
// // Your tasks:
// // 1. Store Mark's and John's mass and height in variables
// // 2. Calculate both their BMIs using the formula(you can even implement both
// // versions)
// // 3. Create a Boolean variable 'markHigherBMI' containing information about
// // whether Mark has a higher BMI than John.
// // Test data:
// // § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// // m tall.
// // § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// // m tall.


// let weightMark1 = 78;
// let heightMark1 = 1.69;

// console.log(`Weight and Height of Mark is ${weightMark1} kg, ${heightMark1} m tall. `)

// let weightJohn1 = 92;
// let heightJohn1 = 1.95;

// console.log(`Weight and Height of John is ${weightJohn1} kg, ${heightJohn1} m tall. `)

// const bmiOfMark1 = weightMark1 / (heightMark1 ** 2);
// console.log(`BMI of Mark is ${bmiOfMark1}.`);

// const bmiOfJohn1 = weightJohn1 / (heightJohn1 ** 2);
// console.log(`BMI of John is ${bmiOfJohn1}.`);

// let markHigherBMI1 = bmiOfMark1 > bmiOfJohn1;
// console.log(markHigherBMI1)

// let weightMark2 = 95;
// let heightMark2 = 1.88;
// let weightJohn2 = 85;
// let heightJohn2 = 1.76;

// console.log(`Weight and Height of Mark is ${weightMark2} kg and ${heightMark2} meter tall.`)
// console.log(`Weight and Height of John is ${weightJohn2} kg and ${heightJohn2} meter tall.`)

// const bmiOfMark2 = weightMark2 / (heightMark2 ** 2);
// console.log(`BMI of Mark is (${bmiOfMark2}).`);

// const bmiOfJohn2 = weightJohn2 / (heightJohn2 ** 2);
// console.log(`BMI of John is (${bmiOfJohn2}).`);

// let markHigherBMI2 = bmiOfMark2 > bmiOfJohn2;
// console.log(markHigherBMI2)



// //Coding Challegne 2

// // Your tasks:
// // 1. Print a nice output to the console, saying who has the higher BMI.The message
// // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
// // BMI(28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement

// let weightMark = 95;
// let heightMark = 1.88;
// let weightJohn = 85;
// let heightJohn = 1.76;

// console.log(`Weight and Height of Mark is ${weightMark} kg and ${heightMark} meter tall.`)
// console.log(`Weight and Height of John is ${weightJohn} kg and ${heightJohn} meter tall.`)

// const BmiOfMark = weightMark / (heightMark ** 2);
// console.log(`BMI of Mark is (${BmiOfMark}).`);

// const BmiOfJohn = weightJohn / (heightJohn ** 2);
// console.log(`BMI of John is (${BmiOfJohn}).`);


// if (BmiOfMark > BmiOfJohn) {
//     console.log(`Mark's BMI (${BmiOfMark}) is higher than John's (${BmiOfJohn}) `)
// } else {
//     console.log(`John's BMI (${BmiOfJohn}) is higher than Mark's (${BmiOfMark})`)
// }





// //Coding Challegne 3

// // There are two gymnastics teams, Dolphins and Koalas.They compete against each
// // other 3 times.The winner with the highest average score wins a trophy!
// // Your tasks:
// // 1. Calculate the average score for each team, using the test data below
// // 2. Compare the team's average scores to determine the winner of the competition,
// // and print it to the console.Don't forget that there can be a draw, so test for that
// // as well(draw means they have the same average score)
// // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// // team only wins if it has a higher score than the other team, and the same time a
// // score of at least 100 points.Hint: Use a logical operator to test for minimum
// // score, as well as multiple else -if blocks
// // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// // both teams have the same score and both have a score greater or equal 100
// // points.Otherwise, no team wins the trophy
// // Test data:
// // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



// let matchOneDolphins = 96 + 108 + 89;
// let matchOneKoalas = 88 + 91 + 110;


// let matchTwoDolphins = 97 + 112 + 101;
// let matchTwoKoalas = 109 + 95 + 123


// let matchThreeDolphins = 97 + 112 + 101;
// let matchThreeKoalas = 109 + 95 + 106;


// let avgScoreOfDolphins = (matchOneDolphins) / 3;
// let avgScoreOfKoalas = (matchOneKoalas) / 3;

// console.log(`Average Score of Team Dolphins =  ${avgScoreOfDolphins} and Team Koalas = ${avgScoreOfKoalas}`)

// if (avgScoreOfDolphins > avgScoreOfKoalas && avgScoreOfDolphins >= 100) {
//     console.log("YaY! The Dolphins Won the Competition")
// } else if (avgScoreOfDolphins === avgScoreOfKoalas && avgScoreOfDolphins >= 100 && avgScoreOfKoalas >= 100) {
//     console.log("OOO! Its a Draw. Both Teams were Strong.")
// } else if (avgScoreOfKoalas > avgScoreOfDolphins && avgScoreOfDolphins >= 100) {
//     console.log("YaY! The Koalas Won the Competition")
// } else {
//     console.log("No one Wins")
// }


// // Coding Challange 4
// // Steven wants to build a very simple tip calculator for whenever he goes eating in a
// // restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
// // 300. If the value is different, the tip is 20 %.
// // Your tasks:
// // 1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
// // this.It's not allowed to use an if/else statement � (If it's easier for you, you can
// // start with an if/else statement, and then try to convert it to a ternary
// // operator!)
// // 2. Print a string to the console containing the bill value, the tip, and the final value
// //     (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
// // 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430
// // Hints:
// // § To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
// // § Value X is between 50 and 300, if it's >= 50 && <= 300

// const bill = 430;
// const tip = (bill >= 50 && bill <= 300) ? bill * (15 / 100) : bill * (20 / 100);
// let finalBill = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`;
// console.log(finalBill);