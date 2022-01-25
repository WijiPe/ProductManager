const Product  = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.showAllProducts = (request, response) => {
    Product.find()
        .then(products =>{response.json(products)})
        .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newProduct =>{response.json(newProduct)})
        .catch(err => response.json(err));
}
