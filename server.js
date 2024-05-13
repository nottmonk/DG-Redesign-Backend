require("dotenv").config();
require("./config/db.connection");

const { PORT } = process.env;

const express = require("express");

const app = express();
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");

const dollarGeneralRouter = require("./routes/dollarGeneral");
const myDGRouter = require("./routes/myDG");
const ccbRouter = require("./routes/ccb");
const weeklyAdsRouter = require("./routes/weeklyAds");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/", (req, res) => {
  fs.readFile("DummyData", (err, data) => {
    if (err) {
      console.log("Error reading file");
      res.status(500).send("internal server error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.log("error parsing", parseError);
      res.status(500).send("Internal server error");
    }
  });
});
app.use("/dg", dollarGeneralRouter);
app.use("/deals", ccbRouter);
app.use("/myDg", myDGRouter);
app.use("/weekly-ads", weeklyAdsRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
