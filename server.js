

const express = require("express");

const app = express();

// import routes:
const mainPage = require('./routes/main');

app.use('/data', mainPage);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
