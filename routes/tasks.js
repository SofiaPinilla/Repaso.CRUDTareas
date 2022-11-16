const express = require("express")
const TaskController = require("../controllers/TaskController")
const router = express.Router()

router.post("/createTask", TaskController.createTask)

module.exports = router
