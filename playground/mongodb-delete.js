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
                      //   .deleteOne({text: "Eat lunch"})
                      //   .then((result) => {
                      //            console.log(result);
                      //          },
                      //          (err) => {
                      //            console.log('Unable to dlet todo',err);
                      //          });

                      // db.collection('Users')
                      //   .deleteMany({name: "Heidi Pierce"})
                      //   .then((result) => {
                      //            console.log(result);
                      //          },
                      //          (err) => {
                      //            console.log('Unable to dlet todo',err);
                      //          });
                      //

                      db.collection('Users')
                        .findOneAndDelete({_id: new ObjectID('59788fa1637c43040c45361d')})
                        .then((result) => {
                                 console.log(result);
                               },
                               (err) => {
                                 console.log('Unable to dlet todo',err);
                               });


                      // db.close();
                    });
