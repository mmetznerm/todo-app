const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delte'])
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo