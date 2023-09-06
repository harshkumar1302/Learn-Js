// Assignment 1

let country = "India";
let continent = "Asia";
let population = `${456} millions`;

console.log(`${continent} is a huge continent in which ${country} is a big country with a population of ${population}.`);






// Coding Challenge 1

// Mark and John are trying to compare their BMI(Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall.


let weightMark1 = 78;
let heightMark1 = 1.69;

console.log(`Weight and Height of Mark is ${weightMark1} kg, ${heightMark1} m tall. `)

let weightJohn1 = 92;
let heightJohn1 = 1.95;

console.log(`Weight and Height of John is ${weightJohn1} kg, ${heightJohn1} m tall. `)

const bmiOfMark1 = weightMark1 / (heightMark1 ** 2);
console.log(`BMI of Mark is ${bmiOfMark1}.`);

const bmiOfJohn1 = weightJohn1 / (heightJohn1 ** 2);
console.log(`BMI of John is ${bmiOfJohn1}.`);

let markHigherBMI1 = bmiOfMark1 > bmiOfJohn1;
console.log(markHigherBMI1)

let weightMark2 = 95;
let heightMark2 = 1.88;
let weightJohn2 = 85;
let heightJohn2 = 1.76;

console.log(`Weight and Height of Mark is ${weightMark2} kg and ${heightMark2} meter tall.`)
console.log(`Weight and Height of John is ${weightJohn2} kg and ${heightJohn2} meter tall.`)

const bmiOfMark2 = weightMark2 / (heightMark2 ** 2);
console.log(`BMI of Mark is (${bmiOfMark2}).`);

const bmiOfJohn2 = weightJohn2 / (heightJohn2 ** 2);
console.log(`BMI of John is (${bmiOfJohn2}).`);

let markHigherBMI2 = bmiOfMark2 > bmiOfJohn2;
console.log(markHigherBMI2)
