// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input:

// const colors = ["red", "blue", "green", "yellow", "orange"];

// let rev = [];

// for (const val of colors) {
//   rev.unshift(val);
// }
// console.log(rev);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// let result = [];

// for (const val of numbers) {
//   if (val % 2 === 0) {
//     result.push(val);
//   }
// }

// console.log(result);

// const output = [12, 98, 78, 46];

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let result = '';
// for(const val of numbers) {
//     result += val;
// }
// console.log(result)

// 'TomTimTinTik'

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// const statement = "I am a hard working person";
// let str = "";
// let result = statement.split(" ").reverse().join(" ");
// console.log(result);

// Output:

// 'person working hard a am I'

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// const arr = [1, 2, 3];

// console.log(arr);

// let result = [...arr]

// result[0] = 99;
// console.log(result);

// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

// let student = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];

// for (const val of student) {
//     console.log(`${val.name} scored ${val.marks}`)
// }

// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let result = [...arr];
result[1] = [99, 4];
console.log(result);
