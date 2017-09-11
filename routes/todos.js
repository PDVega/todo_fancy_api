const express = require('express')
const router = express.Router()
const controller = require('../controllers/todoController');


router.post('/add', controller.postTodo)

//why to using post to get list of todos? because post token to get id user, and show list todos of that user known by token.
router.post('/', controller.getAllTodo)

router.get('/:id', controller.getTodobyId)
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

//change status when todo is done
router.put('/:id/toggle', controller.changeStatus)


module.exports = router;
