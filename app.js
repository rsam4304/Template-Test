console.log("sam")
const numbers = [3, 4];
numbers.push(5, 6);
numbers.unshift(1, 2)
//console.log(numbers)
numbers.splice(2, 2, "a", "b")
console.log(numbers)

numbers.pop();
//console.log(numbers)
const first = numbers.shift();
//console.log(first)
//console.log(numbers)
// const courses = [
//     { name: "a", id: 1 },
//     { name: "b", id: 2 }
// ]
// const course = courses.find((course => {

//     return course.name === "a"
// }))

//console.log(course);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
//console.log(arr3);
//console.log(arr3.slice(2, 5))

//console.log('test')
const arr = [2, 4, 6, 8];
for (let number of arr) {
    console.log(number)
}
arr.forEach(function (a) {
    console.log(a)
})
let today = new Date().toISOString().slice(0, 10);

// today = yyyy + '-' + mm + '-' + dd;
console.log(today)