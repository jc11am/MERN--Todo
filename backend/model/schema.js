const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

const TodoDB = mongoose.model("TodoDB", todoSchema)

module.exports = TodoDB;