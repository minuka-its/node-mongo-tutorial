const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Could not connect to the server');
  }
  console.log('Sucessfuly connected to the server');

  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unnable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Calvin Miller'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unnable to fetch todos', err);
  });
  // db.close();
});
