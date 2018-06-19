const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Could not connect to the server');
  }
  console.log('Sucessfuly connected to the server');

  // db.collection('Todos').insertOne({
  //   name : 'Something to do',
  //   completed : false
  // },(err, result) =>{
  //   if (err) {
  //     return console.log('Unnable to insert todo');
  //   }
  // });

  db.collection('Users').insertOne({
    name: 'Calvin Miller',
    age : 30,
    location:'CA'
  },(err,result)=>{
    if(err){
      return console.log('Could not insert into Users');
    }
    console.log(result.ops);
  });
  db.close();
});
