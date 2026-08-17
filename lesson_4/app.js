// Function

// DRY - Don't repeat yourself

// function declaration
function test() {
    // body
    console.log("Func. decl.")
}

// function expression
const test2 = function () {
    console.log("Func. expr.")
}

// function expression (arrow)
const test3 = () => {
    console.log("Func. expr. arrow")
}

test()
test2()
test3()

function getGlobusBonus(amount = 0, card = null) {

    if (card === null) {
        return 0;
    }

    let bonus = 0;

    if (amount >= 800 && amount <= 1999) {
        bonus = Math.floor(amount / 100);
    }

    if (amount >= 2000 && amount <= 4999) {
        bonus = Math.floor(amount / 100) * 2;
    }

    if (amount >= 5000) {
        bonus = Math.floor(amount / 100) * 3;
    }

    return bonus;
}


const getRegion = function (carNumber = "01KG999XXX") {

    // const symbol1 = carNumber[0];
    // const symbol2 = carNumber[1];
    // const regionCode = symbol1 + symbol2;

    const regionCode = carNumber.slice(0, 2)

    if (regionCode === "01") {
        return "Bishkek";
    }

    if (regionCode === "02") {
        return "Osh";
    }

    return null;
}

console.log("01KG999XXX from ", getRegion("01KG999XXX"))
console.log("02KG999XXX from ", getRegion("02KG999XXX"))
console.log("111222333 from ", getRegion("111222333") ?? "???")


const getRegion2 = (carNumber) => {

    if (carNumber.startsWith("01")) {
        return "Bishkek";
    }

    if (carNumber.startsWith("02")) {
        return "Osh";
    }

    if (carNumber.startsWith("03")) {
        return "Batken";
    }

    return null;

}

console.log("01KG999XXX from ", getRegion2("01KG999XXX"))
console.log("02KG999XXX from ", getRegion2("02KG999XXX"))
console.log("111222333 from ", getRegion2("111222333") ?? "???")

const mobileDetect = (phoneNumber = "996700556677") => {

    const operatorCode = phoneNumber.slice(3, 6);

    if(detectMega(operatorCode)){
        return "MEGA";
    }

    if(detectNurtelecom(operatorCode)){
        return "O!";
    }

    // Beeline

    return null;
}

function detectMega(code) {
    const megaCodes = ["550", "551", "552", "553", "554", "555"];
    return megaCodes.includes(code);
}

function detectNurtelecom(code) {
    const megaCodes = ["500", "501", "502", "503", "504", "505"];
    return megaCodes.includes(code);
}






