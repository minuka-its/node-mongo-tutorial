const jwt = require('jsonwebtoken');

const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const{User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

var users = [{
  _id:userOneId,
  email:'mdwmdwrrr@gmail.com',
  password:'userOnePass',
  tokens:[{
    access:'auth',
    token:jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id:userTwoId,
  email:'jokerbatman@gmail.com',
  password:'userTwoPass',
}];

var todos = [{
  _id: new ObjectID(),
  text:'First Test text'
},{
  _id: new ObjectID(),
  text:'Second Test text'
}];

const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
      return Todo.insertMany(todos);
    }).then(()=>{done()});
};

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne,userTwo])
    }).then(()=>done());
};

module.exports = {todos,populateTodos,users,populateUsers};
