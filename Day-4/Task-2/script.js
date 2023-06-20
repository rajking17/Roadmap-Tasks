var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function(){
    let responseObject = JSON.parse(this.responseText);

    //console.log(responseObject)

    for (let country of responseObject){
        console.log(`Flags: ${country.flag}`)
    }
}

xhr.send();