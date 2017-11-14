const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a0a60594546c3d5516d45f6';

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findById(id).then((todos) => {
//     console.log('Todos',todos);
// });

User.findById('5a0a39b746dd0d4d1819564f').then((user) =>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));
}, (e) =>{
    console.log(e);
});

