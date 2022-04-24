const controller = require('../controllers/orders.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/order/add', auth.requireAuthentication, controller.addOrder);
    app.post('/order/getorder', auth.requireAuthentication, controller.getOrder);
    app.post('/order/getAllCustomerOrders', auth.requireAuthentication, controller.getAllCustomerOrders);
}