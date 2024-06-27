//Loops ---> Sum of 1 to 100 

/*
function getSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}

const finalSum = getSum();
console.log("The Sum of 1 to 100 is :", finalSum);  
*/

//Loops ----> Sum of 1 to n passing as an argument

/*
function getSum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

const finalSum = getSum(10);
console.log("The Sum of 1 to 10 is :", finalSum);
*/

//Callback Function ---> Calling another function inside a function

/*
function square(n) {
    const value = n * n;
    return value;
}

function cube(n) {
    const value = n * n * n;
    return value;
}

function sumOfSquare(a, b) {
    const value1 = square(a);
    const value2 = square(b);
    
    const sum = value1 + value2;
    return sum;
}

function sumofCube(a, b) {
    const value1 = cube(a);
    const value2 = cube(b);

    const sum = value1 + value2;
    return sum;
}

const finalSum = sumOfSquare(2, 3);
const finalCube = sumofCube(2, 3);

console.log("The Sum of Square of 2 and 3 is :", finalSum);
console.log("The Sum of Cube of 2 and 3 is :", finalCube);
*/

//Callback Function ---> Passing a function as an argument

function square(n) {
    const value = n * n;
    return value;
}

function cube(n) {
    const value = n * n * n;
    return value;
}

function sumOfSquare(a, b, fn) {
    const value1 = fn(a);
    const value2 = fn(b);

    const sum = value1 + value2;
    return sum;
}

const finalSum = sumOfSquare(2, 3, square);
const finalCube = sumOfSquare(2, 3, cube);

console.log("The Sum of Square of 2 and 3 is :", finalSum);
console.log("The Sum of Cube of 2 and 3 is :", finalCube);


