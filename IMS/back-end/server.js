const express = require("./config/expres");
const app = express();

app.listen(app.get('port'), () => {
  console.log(`Listening to port ${app.get('port')}`);
});