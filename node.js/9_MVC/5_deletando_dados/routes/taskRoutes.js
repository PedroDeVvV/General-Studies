const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/tasks/edit", TaskController.renderEdit);
router.post("/remove", TaskController.removeTask);
router.post("/add", TaskController.createTaskSave);
router.get("/add", TaskController.createTask);
router.get("/", TaskController.showTasks);

module.exports = router;
