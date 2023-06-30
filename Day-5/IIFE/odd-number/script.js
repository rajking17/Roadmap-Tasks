let array = [1, 3, 4, 5, 6, 7, 9, 2, 8];


(function(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);
        }
    }
})(array)