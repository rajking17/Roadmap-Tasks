let emyDetails ={
        "empid": 1,
        "name": "Raj 1",
        "designation": "Sofware Developer",
        "email": "raj1@gmail.com"
    }


Object.keys(emyDetails).forEach(function(key) {
    console.log(`Key :  ${key} , Value : ${emyDetails[key]}`)
  })
