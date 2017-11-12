const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mmongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');
});