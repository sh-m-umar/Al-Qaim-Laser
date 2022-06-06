const controller = require('../controllers/saleRecords.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/salerecord/getcustomersalerecord', auth.requireAuthentication, controller.getCustomerSaleRecord);
    app.post('/salerecord/getproductsalerecord', auth.requireAuthentication, controller.getProductSaleRecord);
    app.post('/salerecord/getsalerecordbydate', auth.requireAuthentication, controller.getSaleRecordByDate);
    app.get('/salerecord/getallsoldproducts', controller.getAllSoldProducts);
}