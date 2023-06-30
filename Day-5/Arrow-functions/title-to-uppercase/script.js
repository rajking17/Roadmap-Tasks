let str = ['apple', 'orange', 'pineapple', 'grapes'];


let upperCaseString = str.map((val) =>{
    str = val.charAt(0).toUpperCase() + val.slice(1);
    console.log(str);
})

console.log(upperCaseString)