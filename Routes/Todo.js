const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  const { task, textarea } = req.body;

  try {
    const TodoDoc = await Todo.create({
        task,
        textarea
    })
    res.json(TodoDoc)
  } catch (err) {
    console.log(`Something wrong with register api ${err}`)
    res.status(400).json(err)
  }
});

//get all cards route
router.get("/",async(req,res)=>{
res.json(
    await Todo.find()
)
})

//Deleted route

router.delete("/:id", async (req,res)=>{
    try {
        const deletedTodo = await Todo.findByIdAndRemove(req.params.id)
        if(!deletedTodo){
            return res.status(404).json({message:"Task not found"})
        }
        res.json({message:"Task deleted", task: deletedTodo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
})

 module.exports = router;