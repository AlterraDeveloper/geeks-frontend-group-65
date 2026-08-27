// Методы массивов
// forEach, map, filter, reduce, find, every, includes, join, slice

const grades = [10, 8, 10, 9, 8, 7, 10, 4];
console.log("Grades count => ", grades.length);

const printLessonInfo = (grade, index) => {
    const lessonNo = index + 1;
    console.log("Урок " + lessonNo + ". Баллов: " + grade);
}

grades.forEach(printLessonInfo);

const existings = [1, 1, 0, 0, 'online', 'online', 'online', 'online']
//                      [1,1,0,0,1,1,1,1]

const replaceOnline = (value) => {
    if (value === 'online') {
        return 1;
    } else {
        return value;
    }
}

const replacedValues = existings.map(replaceOnline);

console.log("Before replace:" + existings);
console.log("After replace:" + replacedValues);

const replaceToEmoji = (value) => {
    // if (value === 1) {
    //     return '✅'
    // } else {
    //     return '❌'
    // }
    return value === 1 ? '✔' : '❌';
}

const emojies = replacedValues.map((value) => value === 1 ? '✔' : '❌');

console.log("Without emojies: ", replacedValues.join());
console.log("With emojies: ", emojies.join(''));

const balls = emojies.map((emoji) => {
    const div = document.createElement("div"); // <div></div>
    div.textContent = emoji;
    div.classList.add("ball");
    if (emoji === "✔") {
        div.classList.add("ok");
    } else {
        div.classList.add("error");
    }
    return div;
})

// document.body.append(...balls);


const lessons = [1,2,3,4,5,6,7,8];

const lessonsDivs = lessons.map(lesson => {
    const div = document.createElement("div");
    div.textContent = `Урок №${lesson}`;
    div.classList.add("lesson");
    return div;
})

document.body.append(...lessonsDivs);

const transactions = [450, -5000, 80_000, -4700, -9000, 500, -8000];

function isIncome(value){
    return value > 0;
}

const incomes = transactions.filter(isIncome);
const expenses = transactions.filter(function(value){
    return value < 0;
})

function checkOperator(code){
    const megaCodes = ['555', '999'];
    const oshkaCodes = ['500','700'];
    const beelineCodes = ['777'];

    return megaCodes.includes(code) || oshkaCodes.includes(code) || beelineCodes.includes(code);
}

