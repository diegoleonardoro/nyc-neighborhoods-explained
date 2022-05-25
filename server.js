const express = require("express");

const app = express();

const path = require("path");

// import routes:
const mainPage = require("./routes/main");
app.use("/data", mainPage);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, 'public', 'index.html' ));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
