let array = [1, 3, 4, 5, 6, 7, 9, 2, 8];


let oddNumbers = array.map((value) =>{
    if(value % 2 !== 0){
        console.log(value);
    }
})
oddNumbers(array)