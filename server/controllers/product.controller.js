const Product  = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json(
        "Hello World"
    );
}

module.exports.showAllProducts = (request, response) => {
    Product.find()
        .then(products =>response.json(products))
        .catch(err =>response.json(err));
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newProduct =>response.json(newProduct))
        .catch(err =>response.status(400).json(err));
}

module.exports.showOneProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
    .then(product =>response.json(product))
    .catch(err =>response.json(err));
}

module.exports.removeProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err));
}

module.exports.updateProduct = (request, response) => {
    Product.updateOne({_id: request.params.id}, request.body, { new: true, runValidators: true })
    .then(updateProduct =>response.json(updateProduct))
    .catch(err =>response.status(400).json(err));
}
