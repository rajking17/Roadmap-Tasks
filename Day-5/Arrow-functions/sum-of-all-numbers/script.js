let array = [1, 3, 4];

let sumOfAllNumbers = array.reduce((acc , val) => {
    return acc + val;
})

console.log(sumOfAllNumbers);