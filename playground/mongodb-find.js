// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,
       ObjectID} = require('mongodb');

// var obj = new  ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',
                    (err,db) => {
                      if (err){
                        return console.log('Unable to connect to mongodb server');
                      }
                      console.log('Connected to mongoDB server');

                        //  db.collection('Todos')
                        //    .find({_id: new ObjectID('59788d72f16c0a17647bae50')})
                        //    .toArray()
                        //    .then((docs) => {
                        //             console.log('Todos:');
                        //             console.log(JSON.stringify(docs,undefined,2));
                        //           },
                        //           (err) => {
                        //             console.log('Unable to fetch todos',err);
                        //           });


                        // db.collection('Todos')
                        //   .find()
                        //   .count()
                        //   .then((count) => {
                        //            console.log(`Todos count: ${count}`);
                        //          },
                        //          (err) => {
                        //            console.log('Unable to fetch todos',err);
                        //          });

                         db.collection('Users')
                           .find({name: "Heidi Pierce"})
                           .count()
                           .then((count) => {
                                    console.log(`User count: ${count}`);
                                  },
                                  (err) => {
                                    console.log('Unable to fetch users',err);
                                  });


                      // db.close();
                    });
