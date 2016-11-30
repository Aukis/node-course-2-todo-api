//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('583f19e92d1964889962214f')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('583f09dffcc0f51a88a9d9d5')
  },{
    $set: {
      name: 'Aukis'
    },
    $inc: {
      age:1
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });


  //db.close();
});
