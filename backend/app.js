require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


//create express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

const todoRoutes = require("./routes/routes");

app.use("/api/todo/", todoRoutes);




const port = process.env.PORT

mongoose.connect(process.env.MONGODB)
    .then(function() {
        app.listen(port, function() {
            console.log("success")
        });
    })
    .catch(function(error) {
        console.log(error.message)
    });
