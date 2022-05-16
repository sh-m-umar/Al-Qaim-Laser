const controller = require('../controllers/customers.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/customer/add', auth.requireAuthentication, controller.addCustomer);
    app.post('/customer/update', auth.requireAuthentication, controller.updateCustomer);
    app.post('/customer/getbalance', auth.requireAuthentication, controller.getBalance);
    app.get('/customer/getallcustomers', controller.getAllCustomers);
}