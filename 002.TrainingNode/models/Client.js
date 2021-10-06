const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:3, maxlength:50},
  email:{type:String, required:true, minlength:3, maxlength:100},
  password:{type:String, required:true, minlength:8, maxlength:100},
  admin:{type:Boolean, default:false}
})

module.exports = mongoose.model('client', clientSchema);