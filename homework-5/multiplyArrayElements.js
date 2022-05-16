const numberArray = [{num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}];

const multiplyArray = numberArray.reduce(function (prevValue, currentValue) {
    return prevValue*currentValue.num;
}, 1);

console.log(multiplyArray);
