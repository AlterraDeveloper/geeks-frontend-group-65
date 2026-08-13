console.log("Lesson 3")

// Array - массив

const homeworksPoints = [10, 10, 10]
//                                0   1  2

homeworksPoints.push(9, 9)
homeworksPoints.unshift(5, 5)
homeworksPoints[7] = null

// homeworksPoints = null

// const waste = [100, "сто", true, false, null, undefined, []]

console.log("Points: ", homeworksPoints)
console.log("Count:", homeworksPoints.length)
console.log("Data type of array:", typeof homeworksPoints)

// Loop - цикл

// for..of

let totalPoints = 0
for (const point of homeworksPoints) {
    totalPoints += point
}

console.log("Total points: ", totalPoints)
console.log("Average points: ", totalPoints / homeworksPoints.length)


const appears = [1, 1, 0, 0, 'online', 'online', 1, 0]
let totalAppears = 0

for (const appear of appears) {
    if (appear === 1 || appear === 'online') {
        totalAppears++
    }

    // if(appear === "online"){
    //     totalAppears++
    // }
}

console.log("Студент посетил " + totalAppears + " уроков из " + appears.length)

// for со счетчиком

for (let i = 1; i <= homeworksPoints.length; i++) {
    const points = homeworksPoints[i - 1];
    if (points === null) {
        console.log("Студент за " + i + " урок не получил баллов");
    } else {
        console.log("Студент за " + i + " урок получил: " + points + " баллов");
    }
}

const student = {
    name: "Alex Ivanov",
    course: "frontend",
    group: "Geeks 65-2F",
    points: [5, 10, 10, 5, 9, 8, 8, 8],
    appears: [1, 1, 1, 'online', 'online', 0, 0, 0],
}

const payment = {
    id: "4e5f4ew56f46wef64ew65f46w5e4f65",
    amount: 5000,
    currency: "KGS",
    createdDate: "13-08-2026 18:55:17",
    service: "Mbank",
    requisite: "+996700242424",
    status: "Pending"
}

