const express = require("express");
const bodyparser = require("body-parser");
const feedRouter = require("./routes/feed");
const app = express();
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/feed", feedRouter);

app.listen(8080);
