const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Could not connect to the server');
  }
  console.log('Sucessfuly connected to the server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID("5b28b5fcf9a49d7068263bc2")
  // },{
  //   $set:{
  //     name : 'Go for a Swim'
  //   }
  // },{
  //     returnOriginal : false
  //
  // }).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name:'Arty'
  },{
    $set:{
      name : 'Sonia'
    },
    $inc:{
      age:1
    }
  },{
      returnOriginal : false

  }).then((res)=>{
    console.log(res);
  });
  db.close();
});
