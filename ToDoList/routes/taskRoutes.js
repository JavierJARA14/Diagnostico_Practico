const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
// STATS
router.get('/stats/',taskController.getStats);
// GET
router.get('/',taskController.getAllTasks);
router.get('/:id',taskController.getTaskById)
// POST
router.post('/',taskController.createTask);
// PUT
router.put('/update/:id',taskController.updateTask);
// DELETE
router.delete('/delete/:id',taskController.deleteTask);

module.exports = router;