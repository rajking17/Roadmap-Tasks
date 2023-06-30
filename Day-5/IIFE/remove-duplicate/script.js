let array = [1, 2, 'test', 3, 3, 4, 'test', 5, 5];
  
(function(array) {
    console.log(array.filter((value, index) => array.indexOf(value) === index))
})(array);