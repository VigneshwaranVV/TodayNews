var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var UserDetailsSchema=new Schema({
	username:String,
	password:String
})
module.exports=mongoose.model('userinfo',UserDetailsSchema);
