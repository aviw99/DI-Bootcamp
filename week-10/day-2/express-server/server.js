const express = require('express');
const {products} = require('./config/data.js');

const app = express();

const logger = (req, res, next) => {
    console.log('url=>',req.url);
    console.log('params=>',req.params);
    console.log('query=>',req.query);
    console.log('body=>',req.body);
    next();
};
const auth = (req, res, next) => {
    const user = req.query.user;
    if(user === 'admin'){
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}
app.use('/api/products', logger);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(3001, () => {
    console.log('server running on port 3001');
})

app.get('/api/products',logger, (req, res) => {
    res.send(products)
})

app.get('/api/products/:product_id', (req, res) => {
    console.log(req.params)
    const id = req.params.product_id;
    const product = products.find(item => item.id == id);
    if(!product){
        return res.status(404).json({message:'Product not found'})
    }
    res.json(product)
})

app.get('/api/search', (req, res) => {
    // console.log(req.query)
    const product_name = req.query.name;
    const filtered = products.filter(item => {
        return item.name.toLowerCase().includes(product_name.toLowerCase());
    })
    if(filtered.length <= 0){
        return res.status(200).json({message: 'No products matched your search'})
    }
    res.json(filtered)
})

app.post('/api/products', (req, res) => {
    products.push(req.body);
    res.send('OK from POST')
})

app.delete('/api/products/:product_id', (req, res) => {
    const id = req.params.product_id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1){
        return res.status(404).json({message: 'Not found'});
    }
    products.splice(index, 1);
    res.status(200).json(products)

})

app.put('/api/products/:product_id', (req, res) => {
    const id = req.params.product_id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1){
        return res.status(404).json({message: 'Not found'});
    }
    products[index] = {
        ...products[index],
        name:req.body.name,
        price:req.body.price
    }
    res.status(200).json(products)
})