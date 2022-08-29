// Write your code below this line.

const luckyNumbers = (numOfNums) => {
    let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let chosenNumbers = [];

    for (i = 0; i < numOfNums; i++) {
        const randomSelection = Math.floor(Math.random() * numberList.length);
        chosenNumbers.push(numberList.splice(randomSelection, 1))
    }
    return chosenNumbers;
}

console.log("LN4:", luckyNumbers(4));
console.log("LN7:", luckyNumbers(7));
console.log("LN2:", luckyNumbers(2));