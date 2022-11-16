const express = require("express");
const TaskController = require("../controllers/TaskController");
const router = express.Router();

router.post("/createTask", TaskController.createTask);
router.get("/getAllTask", TaskController.getAllTask);
router.get("/getTaskById/:_id", TaskController.getTaskById);
router.put("/taskCompleted/:_id", TaskController.taskCompleted);


module.exports = router;
