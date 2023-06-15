const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json()); //without this line req.body is undefined
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello/', (req, res) => {
    res.send('Hello from Express')
})

app.post('/api/world', (req, res) => {
    const data = req.body;

    console.log(data)
    res.send(`I received your POST request. This is what you sent me: ${data.input}`)
})

app.listen(3000, () => {
    console.log('running on port 3000')
})

