var express = require('express'   );
var router = express.Router();
var news=require('../models/newsmodel');
  router.post("/add",function(req,res) {
    if(req.body) {
    var newsvar=new news();
    newsvar.author=req.body.author,
    newsvar.title=req.body.title,
    newsvar.description=req.body.description,
    newsvar.url=req.body.url,
    newsvar.urltoImage=req.body.urlToImage,
    newsvar.publishedAt=req.body.publishedAt
    newsvar.comments="";
console.log("eeeeeeeeeeeeeeeeeeeeeeeeee"+newsvar.URL);
    newsvar.save(function(err){
    if(err) {
      console.log(err+"------------");
     // res.send(err);
    }
    else  {
       res.send("News inserted");
    }
      });
    }
    else{
      console.log("else part");
    }
    });
router.delete("/delete",function(req,res) {
  console.log("************************"+req.body.title);
    var request=req.body.title;
    if(request)
    {
      news.remove({title:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
          console.log("delete success");
        res.send("news deleted");
        }
      });
    }
  });
  router.put("/update",function(req,res) {
    if(req.body)
    {
    news.update({"title":req.body.title},{$set:{"comments":req.body.comments}},function(err){

    console.log(req.body.title);
    console.log(req.body.comments);
        if(err) {
          res.send(err);
        }
        else  {
          console.log("vv+++________");
        res.send("news updated");
        }
      });
    }
  });
  router.get('/', function(req, res, next) {
    news.find({},function(err,allnews){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }                         
      else {
       res.send(allnews);
          console.log("okkkk44554+allnews");
      }

        
    });
  });



module.exports = router;
