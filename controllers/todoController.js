const Todo = require('../models/Todo');
const authorized = require('../helpers/authorize');

const postTodo = (req, res) => {
  let task = req.body.task;
  let tags = req.body.tags.split(',');
  tags = tags.map(tag => tag.trim());
  authorized.userInfo(req.body.token, function(result){
    // console.log('ini result ====', result);
    let newTodo = new Todo({
      task: task,
      creator: result.id,
      status: false,
      tags: tags
    })
    newTodo.save((err, todo) => {
      if(err) throw err
      res.send(todo)
    })
  })
}

const getAllTodo = (req, res) => {
  authorized.userInfo(req.body.token, result => {
    Todo.find({ creator: result.id }, (err, todos) => {
      res.send(todos)
    })
  })
}

const getTodobyId = (req, res) => {
  Todo.findOne({_id: req.params.id}, (err, todo) => {
    res.send(todo)
  })
} 

const updateTodo = (req, res) => {
  authorized.userInfo(req.body.token, result => {
    Todo.findById(req.params.id, (err, todo) => {
      console.log(todo);
      if(err) throw err
      else {
        if(todo.creator == result.id){
          todo.task = req.body.task || todo.task;
          todo.status = req.body.status || todo.status;
          todo.tags = req.body.tags || todo.tags;
          todo.save((err, newTodo) => {
            if(err) throw err
            res.send(newTodo)
          })
        } else {
          res.send(todo)
        }
      }
    })
  })
}

const deleteTodo = (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if(err) throw err
    Todo.remove({_id: todo._id}, (err, todo) => {
      // console.log(todo);
      if(err) throw err
      res.json({message: 'Deleted success!'})
    })
  })
}

const changeStatus = (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    console.log(todo);
    if(err){
      res.send(err)
    } else {
      todo.status = req.body.status || todo.status;
      todo.save((err, newTodo) => {
        if(err){
          res.send(err)
        } else {
          res.send(todo)
        }
      })
    }
  })
}


module.exports = {
  postTodo,
  getAllTodo,
  getTodobyId,
  updateTodo,
  deleteTodo,
  changeStatus
};
