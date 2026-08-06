// document.body.style.backgroundColor = "orange";
// document.body.style.fontSize = "80px";
// document.body.style.color = "purple";
// document.body.innerHTML = "<h1>Hello Group 65!!!</h1>";

// V8 - JavaScript Engine

// переменные

// типы данных:
// 1. Строки, текст string
// 2. Числа number
// 3. Логический boolean
// 4. Undefined
// 5. Null
// 6. Object

// *7. BigInt
// *8. Symbol

let amount = prompt("Введите сумму");

// camel case
let serviceName = "M bank";
let phoneNumber = "996500242424";
let commission = amount * 0.01; // Комиссия 1%
let totalAmount = amount - commission;
let comment = null;
let isSuccess = amount < 1_000_000;

console.log("Service name:", serviceName);
console.log("Phone number: ", phoneNumber);
console.log("Amount: ", amount);
console.log("Commission: ", commission);
console.log("Total Amount: ", totalAmount);
console.log("Comment: ", comment ?? "");

if (isSuccess === true) {
    console.log("Платеж исполнен ✅️");
} else {
    console.log("Платеж отклонен 🚫")
}
