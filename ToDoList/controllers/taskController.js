const{tasks, getNextID, getStats} = require('../models/tasks');

exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
}

exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(item => item.id === id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({message: "Tarea no encontrada,"});
    }
}

exports.createTask = (req, res) => {
    const newTask = {
        id: getNextID(),
        title: req.body.title || "Tarea sin título",
        description: req.body.description || "",
        dueDate: req.body.dueDate || new Date(),
        priority: req.body.priority || "Low",
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}

exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(item => item.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            id: id,
            title: req.body.title,
            description: req.body.description || "",
            dueDate: req.body.dueDate || null,
            priority: req.body.priority || "Low",
            completed: req.body.completed || false
        };
        res.status(200).json(tasks[taskIndex]);
    } else {
        res.status(404).json({message: "Tarea no encontrada."});
    }
}

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(item => item.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).json({message: "Tarea eliminada."});
    } else {
        res.status(404).json({message: "Tarea no encontrada."});
    }
}

exports.getStats = (req, res) => {
  const stats = getStats();
  res.status(200).json(stats);
};