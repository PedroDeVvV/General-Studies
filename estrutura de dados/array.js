let arr = []

arr[0] = 9.9
arr[1] = 31.5
arr[2] = 21.32
arr[3] = 20.4

let daysOfWeek = ['tokyo', 'suiça', 'holanda'];

// for(let i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i])
// }

let fibonacci = [0, 1, 1]

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// console.log(fibonacci)

let numbers = [0, 1, 2, 3, 4, 5, 6]

numbers.splice(3, 3);
// console.log(numbers)
numbers.splice(3, 0, 3, 4, 5)
// console.log(numbers)

let avgTempWeek = []

let avgSemana1 = [33, 31, 24.5, 34, 41.9, 23.9]
let avgSemana2 = [9, -1, 20.8, 12.3, 34.2, 23.3]

avgTempWeek[0] = avgSemana1;
avgTempWeek[1] = avgSemana2;
// console.log(avgTempWeek)

for(let i = 0; i < avgTempWeek.length;  i++) {
    for(let j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j])
    }
}

// let month = []
// let firstWeeks = []
// let lastWeeks = []

// let avgSemana1 = [33, 31, 24.5, 34, 41.9, 23.9]
// let avgSemana2 = [9, -1, 20.8, 12.3, 34.2, 23.3]
// let avgSemana3 = [39, -2, 10.8, 12.5, 31.2, 23.2]
// let avgSemana4 = [1, -1, 20.8, 12.3, 29.2, 22.3]

// firstWeeks = [avgSemana1, avgSemana2]
// lastWeeks = [avgSemana3, avgSemana4]

// month = [firstWeeks, lastWeeks]

// // console.log(month[1][1][3])

// for (let i = 0; i < month.length; i++) {
//     for (let j = 0; j < month[i].length; j++) {
//         for (let k = 0; k < month[i][j].length; k++) {
//             console.log(month[i][j][k])
//         }
//     }
// }