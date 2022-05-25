const express = require("express");

const app = express();

// import routes:
const mainPage = require("./routes/main");

app.use("/data", mainPage);

if (process.env.NOde_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
