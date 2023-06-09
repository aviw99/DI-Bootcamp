const express = require('express');
const dotenv = require('dotenv');

const {router} = require('./routes/routes.js');


// const hash = p4ssw0rd.hash(password, options?);

const app = express();

app.use('/', express.static(__dirname + '/public'))

app.listen(3030, () => {
    console.log('running on port 3030')
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router);

