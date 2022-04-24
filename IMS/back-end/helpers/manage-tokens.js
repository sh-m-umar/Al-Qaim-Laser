const jwt = require('jsonwebtoken');
const config = require('../config/config');
const moment = require('moment');

/************************************************
  Create Token
*************************************************/
exports.createToken = function (user) {
  const expire = moment().add(7, 'days').valueOf();
  const payload = {
    ...user,
    expire: expire,
  };

  const token = jwt.sign(payload, config.PRIVATE_KEY);
  return token;
};

/************************************************
  Decode Token
*************************************************/
exports.getTokenData = function (token) {
  return new Promise((resolve, reject) => {
    try {
      let payload = jwt.verify(token, config.PRIVATE_KEY);
      if (payload.expire <= Date.now() / 1000) {
        resolve({ status: false, message: 'Token has expired' });
      } else {
        resolve({ payload: payload, status: true });
      }
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
