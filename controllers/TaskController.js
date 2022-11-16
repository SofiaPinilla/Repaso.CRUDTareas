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
      res.send(tasks);
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
};

module.exports = TaskController;
