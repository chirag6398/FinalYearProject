const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const cors = require("cors");

require("./db/conn");
app.use(passport.initialize());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(require("./routes/user"));
app.use(require("./routes/fir"));

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} started`);
});
