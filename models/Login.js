
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
   name: {
      type: String,
      require: true,
      unique: true,
   },
   call: {
      type: String,
      require: true,
      unique: true,
   },
   password: {
      type: String,
      require: true,
      unique: true,
   },
   comfirm: {
      type: String,
      require: true,
      unique: true,
   }

});
module.exports = mongoose.model('Login', userSchema);
















