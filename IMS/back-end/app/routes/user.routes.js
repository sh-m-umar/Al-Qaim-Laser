const express = require('express');
const controller = require('../controllers/user.controller');
const auth = require('../../config/middlewares/authentication');
var router = express.Router();

router.post('/signup', controller.createUser);
router.post('/signin', controller.verifyUser);
router.post('/updateuser', auth.requireAuthentication, controller.updateUser);

module.exports = router;
