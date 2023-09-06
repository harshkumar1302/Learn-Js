'use strict';

// function logger() {
//     console.log('My name is Harsh');
// }
// // calling / running / invoking function
// logger();



// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const juiceMenuOne = fruitProcessor(5, 0);
// console.log(juiceMenuOne);

// const juiceMenuTwo = fruitProcessor(0, 4);
// console.log(juiceMenuTwo);

// const juiceMenuThree = fruitProcessor(2, 3);
// console.log(juiceMenuThree);


//Function declaration

// let age;
// const currentYear = 2023;
// const harshAge = calcAge1(1999);

// function calcAge1(birthYear) {
//     age = currentYear - birthYear;
//     return age
// }
// console.log(harshAge);


// function calcAge2(birthYear) {
//     return currentYear - birthYear;
// }
// const age1 = calcAge2(1991);
// console.log(age1);


// Function Expression

// const calcAge3 = function (birthYear) {
//     return currentYear - birthYear;
// }
// const age2 = calcAge3(1991);
// console.log(age2);


// Arrow Function
const currentYear = 2023;

const calcAge4 = birthYear => currentYear - birthYear;
const age3 = calcAge4(1999);
console.log(age3);



const yearLeftForRetirement = (birthYear, firstName) => {
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
    // return retirement;
}
const workyearLeft1 = yearLeftForRetirement(1999, 'Harsh');
const workyearLeft2 = yearLeftForRetirement(2001, 'Sachindra');
const workyearLeft3 = yearLeftForRetirement(1997, 'Dhirendar');
console.log(workyearLeft1);
console.log(workyearLeft2);
console.log(workyearLeft3);