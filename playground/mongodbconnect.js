// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Daniel', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
       return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');

    db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    }, (err,result)  => {
        if (err){
            return console.log('Unable to connect', err);
        }
        console.log(JSON.stringify(result.ops, undefined,2));
    });

    db.collection('Users').insertOne({
        name: 'Daniel',
        age: 25,
        location: 'Miami Fl'
    }, (err,result) => {
        if (err) {
            return console.log('Unable to inster user', err);
        }
        console.log(JSON.stringify(result.ops, undefined,2));
    });

    db.close();
});