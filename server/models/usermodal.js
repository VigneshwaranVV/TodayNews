var mongoose=require("mongoose");
const bcrypt = require('bcryptjs');
var Schema=mongoose.Schema;


var usermodal=new Schema({
	username:{type:String,unique:true},
	password:String
})





// usermodal.pre('save', function saveHook(next) {
//   const user = this;

//   // proceed further only if the password is modified or the user is new
//   if (!user.isModified('password')) return next();


//   return bcrypt.genSalt((saltError, salt) => {
//     if (saltError) { return next(saltError); }
// console.log(salt)
//     return bcrypt.hash(user.password, salt, (hashError, hash) => {
//       if (hashError) { return next(hashError); }

//       // replace a password string with hash value
//       user.password = hash;

//       return next();
//     });
//   });
// });


module.exports=mongoose.model('userinfo',usermodal);
