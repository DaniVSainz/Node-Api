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

    // Delete's many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result)
    // });

    //DeleteOne

    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result)
    // })

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({name: 'Daniel'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a07e4a2214e192b6d4645be')}).then((results) => {
        console.log(JSON.stringify(results,undefined,2));
    })

    db.close();
});