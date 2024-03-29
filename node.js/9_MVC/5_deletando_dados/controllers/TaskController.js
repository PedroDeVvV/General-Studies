const Task = require("../models/Task");

module.exports = class TaskController {
  static async createTaskSave(req, res) {
    console.log(req.body);
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };
    console.log(task);

    await Task.create(task);
    res.redirect("/tasks");
  }

  static async removeTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } });
    res.redirect("/tasks");
  }

  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }
};
