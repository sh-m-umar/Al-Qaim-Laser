const controller = require('../controllers/products.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/product/add', auth.requireAuthentication, controller.addProduct);
    app.post('/product/updatestock', auth.requireAuthentication, controller.updateStock);
    app.post('/product/updateProduct', auth.requireAuthentication, controller.updateProduct);
    app.post('/product/getproduct', auth.requireAuthentication, controller.getProduct);
    app.get('/product/getallproducts', auth.requireAuthentication, controller.getAllProducts);
}