const mongoose = require('mongoose');
const express = require('express');


mongoose.Promise = global.Promise;
mongoose.connect('mongodbL//localhost27017/TodoApp');

var Todo = mongose.model('Todo', {
    text:  {
        type: String
    },
    completed: {
        completed: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo:',doc);
}, (e)  =>{
    console.log(e);
});