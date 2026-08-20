console.log("Lesson 5")

// DOM - Document Object Model

// search - поиск

const counterValue = document.getElementById("value");
const plusButton = document.getElementById("plus");
const resetButton = document.getElementById("reset");
const minusButton = document.getElementById("minus");


function getColor(value){

    if(value > 0) return "lime";

    if(value < 0) return "red";

    return "cyan";
}


function addCounter() {
    let counter = Number(counterValue.innerText);
    counter += 1;
    counterValue.innerText = counter.toString();
    counterValue.style.color = getColor(counter);
}

plusButton.addEventListener("click", addCounter);

const minusCounter = () => {
    let counter = Number(counterValue.innerText);
    counter -= 1;
    counterValue.innerText = counter.toString();
    counterValue.style.color = getColor(counter);
}

minusButton.onclick = minusCounter;


resetButton.onclick = () => {
    counterValue.innerText = "0";
    counterValue.style.color = getColor(0);
};




// console.log(counterValue);
// console.log("id => ", counterValue.id);
// console.log("class => ", counterValue.className);
//
// const randomNumber = Math.floor(Math.random() * 89) + 10
// counterValue.innerText = randomNumber;
//
// counterValue.style.color = "#" + randomNumber + randomNumber + "00"
//
// console.log("value =>", counterValue.textContent);