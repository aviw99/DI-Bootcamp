const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log('running on port 3001')
})

// static files
// console.log(__dirname + '/public')
app.use('/', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/aboutMe/:hobby', (req, res) => {
    // res.sendFile(__dirname + '/public/about.html')
    const hobby = req.params.hobby;
    if(isNaN(hobby)){
        return res.status(200).send(`This is my hobby: ${hobby}`)
    }
    res.status(404).send('hobby not found')
})

app.get('/pic', (req,res)=>{
    res.sendFile(__dirname + '/public/image.html')
})

app.get('/form', (req,res)=>{
    res.sendFile(__dirname + '/public/form.html')
})

app.get('/formData', (req,res)=>{
    console.log(req.query)
    res.send(`${req.query.email} sent you a message ${req.query.message}`)
})
app.post('/formData', (req,res)=>{
    console.log(req.body)
    res.send(`${req.body.email} sent you a message from post: ${req.body.message}`)
})