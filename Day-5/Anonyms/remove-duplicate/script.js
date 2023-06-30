let array = [1, 2, 2, 3, 3, 4, 4, 5, 5];
  
let removeDuplicates = function(array) {
    console.log(array.filter((value, index) => array.indexOf(value) === index))
}
removeDuplicates(array);