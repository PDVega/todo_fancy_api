const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    required: [true, 'Task should not be empty']
  },
  status: {
    type: Boolean
  },
  tags: [{
    type: String
  }],
  creator: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
