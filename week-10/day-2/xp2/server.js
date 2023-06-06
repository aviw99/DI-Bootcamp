const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());

const arr = [
    {id:1 , name:"john"},
    {id:2 , name:"mary"},
    {id:3 , name:"bob"}
];

app.get('/users', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user);
});
app.get('/:id', (req, res)=>{
    let id = req.params.id;
    let user = arr.find(obj => obj['id'] == id);
    console.log(user)
    res.json(user);
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

