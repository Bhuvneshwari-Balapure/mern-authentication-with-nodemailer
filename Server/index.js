const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Environment Variable
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); //cors
app.use(express.json()); //cookieParser
app.use(cookieParser()); //cookieParser

// ------------------------
const UserRoute = require("./routes/authRoute");
// ------------------------

// Routes
app.use("/api/user", UserRoute);

// Db connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("mongoose connected...");
    app.listen(PORT, () => console.log(`server Run on ${PORT} Port...`));
  })
  .catch((err) => console.log("DB connection Failed ", err));
