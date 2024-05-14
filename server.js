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
const productRouter = require("./routes/products");
const AuthRouter = require("./routes/AuthRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/dg", dollarGeneralRouter);
app.use("/deals", ccbRouter);
app.use("/myDg", myDGRouter);
app.use("/weekly-ads", weeklyAdsRouter);
app.use("/products", productRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
