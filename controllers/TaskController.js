const Task = require("../models/Task");

const TaskController = {
  async createTask(req, res) {
    try {
      const task = await Task.create({ ...req.body, completed: false });
      res.status(201).send({ msg: "Task created", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while creating task", error });
    }
  },

  async getAllTask(req, res) {
    try {
      const tasks = await Task.find();
      res.send({msg:"Tasks were obtained", tasks});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while getting tasks", error });
    }
  },

  async getTaskById(req, res) {
    try {
      const task = await Task.findById(req.params._id);
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while getting task", error });
    }
  },
  async taskCompleted(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { completed: true },
        { new: true }
      );
      res.send({ msg: "Task completed", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while completing task", error });
    }
  },

  async updateTitleTask(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { title: req.body.title },
        { new: true }
      );

      res.send({ msg: "Task title updated", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while updating title", error });
    }
  },

  async deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params._id);
      res.send({msg: "Deleted successfully", task});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while deleting", error });
    }
  }
};

module.exports = TaskController;
