let str = 'I AM A FULL STACK DEVELOPER';


let upperCaseString = function(str){
    str = str.toLowerCase().split(' ');
    for(var i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
}

upperCaseString(str)