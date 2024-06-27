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

const fs = require('fs')

fs.readFile('Day2.txt', "utf-8", function(err, data){
    console.log(data)
})
