const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.listen(process.env.PORT||3030, () => {
    console.log(`running on port ${process.env.PORT||3030}`);
})

app.get('/', (req,res) => {
    let login = false;
    let user = {
        'firstName': 'John',
        "lastName": "Doe"
    }
    let students = {
        stu1: 'Mary',
        stu2: ' Kelly',
        stu3: 'Lara'
    };
    res.render('index',{
        login,
        user,
        students
    } );
})

app.get('/shop', (req,res) => {
    res.render('shop')
})
