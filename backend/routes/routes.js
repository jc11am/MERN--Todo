const express = require("express");
const router = express.Router();
const {
    getTodo, postTodo, updateTodo, deleteTodo
} = require("../controller/controllers");

//routes
router.get("/", getTodo );

router.post("/", postTodo );

router.patch("/:id", updateTodo );

router.delete("/:id", deleteTodo );


module.exports = router;