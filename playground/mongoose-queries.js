const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b2a22e791ac7a924f6b862a';

// Todo.find({
//   _id:id
// }).then((res)=>{
//   console.log(res);
// });
//
// Todo.findOne({
//   _id:id
// }).then((res)=>{s
//   console.log(res);
// });
//
// Todo.findById(id).then((res)=>{
//   if(!res){
//     return console.log('ID not found');
//   }
//   console.log(res);
// });
User.findById(id).then((res)=>{
  if(!res){
    return console.log('ID not found');
  }
  console.log(JSON.stringify(res,undefined,2));
},(e)=>{
  console.log(e);
});
