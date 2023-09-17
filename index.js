const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Todo = require("./Routes/Todo")
const port = process.env.PORT;
const database = process.env.MONGO_DB_URL;




const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };


//Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log("Express server is started");
});

mongoose.connect(database).then(() =>
  console.log("Connected to the database")
);

//! Routes
app.use("/todo",Todo)