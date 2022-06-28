const TodoDB = require("../model/schema");
const mongoose = require("mongoose");


const getTodo = function(req, res) {
    const todo = TodoDB.find()
    res.status(200).json(todo);
}

const postTodo = async function(req, res) {
    const { text } = req.body
    try {
        const todo = await TodoDB.create({ text })
        res.status(200).json(todo);
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

const updateTodo = async function(req, res) {
    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const todo = await TodoDB.findByIdAndUpdate({_id: id }, { ...req.body })

    if(!todo) {
        return res.status(404).json({message: "data does not exist"})
    }

    res.status(200).json(todo)   
}

const deleteTodo = async function(req, res) {
    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const todo = await TodoDB.findByIdAndDelete({_id: id })

    if(!todo) {
        return res.status(404).json({message: "data does not exist"})
    }
    res.status(200),json(todo)

}
     
module.exports = {
    getTodo,
    postTodo,
    updateTodo,
    deleteTodo
}