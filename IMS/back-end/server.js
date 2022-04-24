const express = require("./config/expres");
const app = express();
const mongoose = require('./config/db');
const db = mongoose();

app.listen(app.get('port'), () => {
  console.log(`Listening to port ${app.get('port')}`);
});