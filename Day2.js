// setTimeout()  --->  Async Function (It is for set time for any function for calling)

/*
function greetAnyone() {
    console.log("Hello Good Morning !!")
}

setTimeout(greetAnyone, 5000)
*/

/*
function findSum(num) {
    let ans = 0
    for(let i = 0; i < num; i++) {
        ans += i;
    }

    console.log("The Sum of 1 to 100 is : " + ans)
}

function findSum100() {
    findSum(100)
}

setTimeout(findSum100, 5000)
*/

//FallBack Function

// const obj = {a : 10, b : 20}
// const value = obj.c || "Default Value"
// console.log(value)

//Async Function ---> fs.readFile()  (It is for reading file)

// const fs = require('fs')

// fs.readFile('Day2.txt', "utf-8", function(err, data){
//     console.log(data)
// })

//Promises ---> It is for handling async function

/*
const fs = require('fs')

//our own asynchronous function

function adiReadFile() {
    return new Promise(function(resolve) {
        fs.readFile('Day2.txt', "utf-8", function(err, data){
            resolve(data)
        })
    })
}

//Callback function to call
function onDone(data) {
    console.log(data)
}

adiReadFile().then(onDone)
*/

// var d = new Date();
// console.log(d.getDate())

/*
// ---> Pending, Resolve, Rejected 
var d = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Foo");
    }, 3000)
});

function Callback() {
    console.log(d);
}

console.log(d);

d.then(Callback);
*/

//Promise

function adiAsyncFunction() {
    let p = new Promise(function(resolve) {
        resolve("Hii, there !!")
    })
    return p
}

const value = adiAsyncFunction()
value.then(function(data){
    console.log(data)
})