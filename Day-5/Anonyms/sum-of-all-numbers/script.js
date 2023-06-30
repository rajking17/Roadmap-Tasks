let array = [1, 3, 4];


let sumOfAllNumbers = function(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }

    console.log(sum)

}

sumOfAllNumbers(array);