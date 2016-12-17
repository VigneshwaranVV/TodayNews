var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var NewsDetailsSchema=new Schema({
	"author":String,
	"title":String,
	"description":String,
	"url":String,
	"urltoImage":String,
	"publishedAt":String,
	"comments":String	
})
module.exports=mongoose.model('newsinfo',NewsDetailsSchema);
