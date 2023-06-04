// const obj = require('./greeting.js')
//
// console.log(obj.greeting)
// const name = "Mike Tylor"
//
// obj.greeting(name)

// const carFunc = require('./cars.js')
//
// carFunc.car('camry', '2002', 'yellow')

const {userInfo} = require('./users.js');

userInfo()
    .then(data => {
        console.log(data)
    })
