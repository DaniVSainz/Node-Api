const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text:  {
        type: String,
        required: true,
        minlength:1
    },
    completed: {
        completed: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo:',doc);
// }, (e)  =>{
//     console.log(e);
// });

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((res)=>{
    console.log(res)
}, (e)=>{
    console.log(e);
});