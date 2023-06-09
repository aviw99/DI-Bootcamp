const {db} = require('../config/db.js');

const getAllProducts = () => {
    return db('products')
        .select('id', 'name', 'price')
        .orderBy('name')
}

const getProduct = (product_id) => {
    return db('products')
        .select('id', 'name', 'price')
        .where({id:product_id})
}

const getProductName = (product_name) => {
    return db('products')
        .select('id', 'name', 'price')
        .whereILike('name',`${product_name}%`)
}

const insertProduct = (product) => {
    return db('products')
        .insert(product)
        .returning('*')
}

const deleteProduct = (id) => {
    return db('products')
        .where({id})
        .del()
        .returning('*')
}

const updateProduct = (id, product) => {
    return db('products')
        .update(product)
        .where({id})
        .returning('*')
}

module.exports = {
    getAllProducts,
    getProduct,
    getProductName,
    insertProduct,
    deleteProduct,
    updateProduct
}