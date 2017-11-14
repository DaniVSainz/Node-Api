const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text:  {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        required:true,
        minlength: 4,
        trim: true
    }
})

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo:',doc);
// }, (e)  =>{
//     console.log(e);
// });

// var otherTodo = new Todo({
//     text: 'Feed the gf ',
// });

// otherTodo.save().then((res)=>{
//     console.log(res)
// }, (e)=>{
//     console.log(e);
// });

var newUser = new User({
    email: 'danivsainz@gmail.com  ',
    password: '123abc '
});

newUser.save().then((user) => {
    console.log('User saved',user);
}, (e) => {
    console.log('Oops you got a error',e);
});