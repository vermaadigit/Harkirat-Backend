function calculate (side, callBack)
{
    let sqaure1 = callBack(side);
    return sqaure1;
}

function square(side)
{
    return side * side;
}

let value = calculate(5, square);
console.log(value); // 25