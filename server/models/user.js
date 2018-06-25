const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
      type:String,
      required:true,
      minlength:5,
      trim:true,
      unique:true,
      validate:{
        validator:(value)=>{
          return validator.isEmail(value);
        },
        message:'{value} is not a valid email address'
      }
    },
    password:{
      type:String,
      required:true,
      minlength: 6,
    },
    tokens:[{
      access:{
        type:String,
        required:true
      },
      token:{
        type:String,
        required:true
      }
    }]
},{
  usePushEach:true
});

UserSchema.methods.toJSON = function () {
  var user = this ;
  var userObject = user.toObject();

  return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function(){
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

  //
  user.tokens.addToSet({
    access,
    token
  });
//   user.tokens.concat([obj])
  return user.save().then(()=>{
    return token;
  })
 };

 UserSchema.statics.findByToken = function(token){
   var User = this;
   var decoded;

   try{
     decoded = jwt.verify(token, 'abc123');
   }catch(e){
     return Promise.reject();
   }

   return User.findOne({
     '_id':decoded._id,
     'tokens.token':token,
     'tokens.access':'auth'
   });
 };
var User = mongoose.model('Users',UserSchema);

module.exports ={User};
