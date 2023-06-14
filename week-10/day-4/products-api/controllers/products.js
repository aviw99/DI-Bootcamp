const {
    getAllProducts,
    getProduct,
    getProductName,
    insertProduct,
    deleteProduct,
    updateProduct
} = require('../modules/products.js');

const _getAllProducts = (req,res) => {
    getAllProducts()
        .then(data => {
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
            res.status(404).json({msg:err.message})
        })
}

const _getAllProductsEjs = (req,res) => {
    getAllProducts()
        .then(data => {
            res.render('index', {
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.render('404')
        })
}

const _getProduct = (req,res) => {
    const id = req.params.id;
    getProduct(id)
        .then(data => {
            res.json(data)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).json({msg:err.message})
        })
}

const _getProductName = (req,res) => {
    getProductName(req.query.name)
        .then(data => {
            res.json(data)
        }).catch(err => {
        console.log(err)
        res.status(404).json({msg:err.message})
    })
}

const _insertProduct = (req,res) => {
    insertProduct(req.body)
        .then(data => {
            // res.json(data)
            _getAllProducts(req, res)
        }).catch(err => {
        console.log(err)
        res.status(404).json({msg: err.message})
    })
}

const _deleteProduct = (req,res) => {
    deleteProduct(req.params.id)
        .then(data => {
            res.json(data)
        }).catch(err => {
        console.log(err)
        res.status(404).json({msg: err.message})
    })
}

const _updateProduct = (req,res) => {
    updateProduct(req.params.id, req.body)
        .then(data => {
            res.json(data)
        }).catch(err => {
        console.log(err)
        res.status(404).json({msg: err.message})
    })
}

module.exports ={
    _getAllProducts,
    _getProduct,
    _getProductName,
    _insertProduct,
    _deleteProduct,
    _updateProduct,
    _getAllProductsEjs
}