const controller = require('../controllers/stats.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/dashboard/stats', auth.requireAuthentication, controller.dashboardStats);
    app.post('/stats/top-selling-products', auth.requireAuthentication, controller.topSellingProducts);
    app.post('/stats/balance-record', auth.requireAuthentication, controller.balanceRecord);
}