const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/edit/:id", TaskController.renderEdit);
router.post("/remove", TaskController.removeTask);
router.post("/add", TaskController.createTaskSave);
router.post("/edit", TaskController.updateTask);
router.get("/add", TaskController.createTask);
router.post('/updatestatus', TaskController.toggleTaskStatus);
router.get('/details/:id', TaskController.details);
router.get("/", TaskController.showTasks);

module.exports = router;
