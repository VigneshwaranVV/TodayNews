var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
	res.render('index', { title: 'Welcome To News update' });
});

router.post("/add",function(req,res) {
	var author=req.param.author;
	var title=req.param("title");


	res.send("News added successfully");
	console.log("News added"+author+"-----"+title);
});
router.delete("/delete/",function(req,res) {
	var request=req.param("title");
	var data=req.body;
	if(request)
	{
		for(var i=0;i<(data.articles).length;i++){
			if((data.articles)[i].title==request){
				delete data.articles[i];
			}
		}
		res.send("<h1>news deleted with title ------"+request+"</h1>"+JSON.stringify(data));


	}
	else
	{
		res.send("<h1>sorry your data not found");
	}
});

router.put("/update/:title",function(req,res) {

	console.log(req.params.title);
	res.send("news updated with title    "+req.params.title);

});


router.post("/bbc",function(req,res) {

	console.log(req.body);
	res.send(req.body.articles);

});


module.exports = router;
