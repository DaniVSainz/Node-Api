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

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todo's count is: ${count}`);
    }, (err) => {
        conosle.log('Unable to fetch documents', err);
    });

    db.collection('Users').find({name: 'Daniel'}).toArray().then((docs) => {
        console.log(`Here are your users with that name`, JSON.stringify(docs,undefined,2));
    }, (err) => {
        conosle.log('Unable to fetch documents', err);
    });

    db.close();
});