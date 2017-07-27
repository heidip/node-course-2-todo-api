// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,
       ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
                    (err,db) => {
                      if (err){
                        return console.log('Unable to connect to mongodb server');
                      }
                      console.log('Connected to mongoDB server');

                      // db.collection('Todos')
                      //   .findOneAndUpdate({_id: new ObjectID('5979aef9bf8ee060cfe3d539')},
                      //                     {$set: {completed: true}},
                      //                     {returnOriginal: false})
                      //   .then((result) => {
                      //            console.log(result);
                      //          },
                      //          (err) => {
                      //            console.log('Unable to dlet todo',err);
                      //          });

                      db.collection('Users')
                        .findOneAndUpdate({_id: new ObjectID('59788f10bdc991261c3e6c10')},
                                          {$set: {name: "Amanda Pierce"},
                                           $inc: {age: 1}},
                                          {returnOriginal: false})
                        .then((result) => {
                                 console.log(result);
                               },
                               (err) => {
                                 console.log('Unable to update',err);
                               });

                      // db.close();
                    });
