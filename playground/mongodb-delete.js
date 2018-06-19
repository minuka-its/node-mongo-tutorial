const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Could not connect to the server');
  }
  console.log('Sucessfuly connected to the server');

  db.collection('Users').deleteMany({name : 'Calvin Miller'}).then(()=>{
    console.log('Deleted Many');
  });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('5b28c968f9a49d706826407e')}).then((res)=>{
    console.log(res);
  })
  db.close();
});
