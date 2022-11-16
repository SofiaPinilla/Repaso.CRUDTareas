const Task = require("../models/Task")

const TaskController = {
    async createTask (req, res){
        try {
            const task = await Task.create({...req.body, completed:false})
            res.status(201).send({msg:"Task created", task})
        } catch (error) {
            console.error(error)
            res.status(500).send({msg: "Error while creating task", error})
        }
    }
}

module.exports = TaskController