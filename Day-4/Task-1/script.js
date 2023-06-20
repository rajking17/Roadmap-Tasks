let obj1 = {name: 'person 1', age: 5};
let obj2 = {age: 5, name: 'person 2'};

var isEqualsJson = (obj1,obj2)=>{

    keys1 = Object.keys(obj1);

    //console.log(keys1)
    
    keys2 = Object.keys(obj2);
    
    //console.log(keys2)
    
    return keys1.length === keys2.length;
}

console.log(`Json Properties are equal ${isEqualsJson(obj1,obj2)}`);
