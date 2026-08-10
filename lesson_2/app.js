console.log("Lesson 2");


// JavaScript = JS
// ECMAScript = ES

// ES6+ (2015)
// var let const

// hoisting


const age = 18;

console.log("My age:", age)

// age = age + 1;
// age += 1;
// age++;

console.log("My age after year:", age)

const myName = "Evgenii";

// myName = "Vadim";
console.log("myName is: ", myName)


// Типы данных
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. object

// camelCase
const hwTotal = prompt("Points:");
const appears = prompt("Appears:");

const userDataText = "Points = " + hwTotal + ", Appears = " + appears;
// p = 5, a = 5

console.warn(userDataText);

if (hwTotal < 0 || hwTotal > 80) {
    console.error("INVALID POINTS. MUST BE 0-80");
} else if (appears < 0 || appears > 8) {
    console.error("INVALID APPEARS. MUST BE 0-8");
} else {
    let isFreeRepeat = hwTotal > 40 && appears >= 7;

    if (isFreeRepeat) {
        console.log("FREE REPEAT!!!")
    } else {
        console.log("Need to pay 15_000")
    }
}

let userNumber = Number(prompt('Enter number 1-5'))

// userNumber = Number(userNumber);

if (userNumber === 1) {
    console.log("I");
} else if (userNumber === 2) {
    console.log("II");
} else if (userNumber === 3) {
    console.log("III");
} else if (userNumber === 4) {
    console.log("IV");
} else if (userNumber === 5) {
    console.log("V");
} else {
    console.warn("INVALID VALUE! MUST BE 1-5. Your value is " + userNumber);
}


// > < >= <= == != === !==

// if (hwTotal > 40) {
//     isFreeRepeat = true;
// } else {
//     isFreeRepeat = false;
// }

// Условия

const total = Number(prompt("Enter total"));

let bonuses = 0;

if (total >= 800 && total <= 1999) {
    bonuses = Math.floor(total / 100);
} else if (total >= 2000 && total <= 4999) {
    bonuses = Math.floor(total / 100) * 2;
} else if (total >= 5000) {
    bonuses = Math.floor(total / 100) * 3;
}

console.log("Your bonuses: " + bonuses);
// 2569 =










