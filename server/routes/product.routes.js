const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/', ProductController.index);
    app.post('/addProduct', ProductController.createProduct);
    app.get('/showProducts', ProductController.showAllProducts);
}

