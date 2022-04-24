const controller = require('../controllers/users.controller');
const auth = require('../../middlewares/authentication');

module.exports = ( {app} ) => {
    app.post('/user/register', controller.createUser);
    app.post('/user/login', controller.verifyUser);
    app.post('/user/update', auth.requireAuthentication, controller.updateUser);
}