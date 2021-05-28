var mongoose = require('mongoose')
var Schema = mongoose.Schema

//add data that we you need to store here
var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean
})

module.exports = mongoose.model('User', UserSchema)
