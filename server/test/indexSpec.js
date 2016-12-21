var should = require("chai").should(),

assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
var request=require('supertest');
var server = request.agent("http://localhost:8080");
var url=supertest("http://localhost:8080")



var User=require('../models/usermodal');
var News=require('../models/newsmodel');
function userClean(){
User.remove({},function(){});
}
function newsClean(){
  News.remove({},function(){});
}


describe("Signup", function(err){
it("Signup", function(done){
  url
  .post("/users/add")
  .send({"username":"sample","password":"wipro"})
  .expect(200)
  .end(function(err,res){
    res.text.should.be.equal("inserted");
    done();
  });

});
});








// describe("Testing the login route", function(err){
//   it("should handle the request", function(done){
//     server
//         .post("/users/login")
//         .send({"username":"sample","password":"wipro"})
//         .expect(200)
//         .end(function(err,res){
//           if (err) {
//                 throw err;
//           }
//          // assert.equal("Hello!",res.text, "res.text is not matching with Hello!");
//           res.text.should.be.equal("inside post login");
//             done();
//         });
//   });
// });

describe("Testing the news route", function(err){
 it("should handle the request", function(done){
    server
        .post("/users/login")
        .send({"username":"sample","password":"wipro"})
        .expect(200)
        .end(function(err,res){
          if (err) {
                throw err;
          }
         // assert.equal("Hello!",res.text, "res.text is not matching with Hello!");
          res.text.should.be.equal("inside post login");
            done();
        });
  });
  it("should handle and send the JSON data", function(done){
    server
        .post("/news/add")
        .send({
"author": "Connie Loizos",
"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter",
"description": "James Slavet says he has been trying to recruit entrepreneur Josh McFarland for eight years. That's just two years after Slavet joined the early-stage venture..",
"url": "http://social.techcrunch.com/2016/12/20/greylock-just-hired-josh-mcfarland-who-sold-his-greylock-backed-company-to-twitter/",
"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/12/dsc05183.jpg?w=764&amp;h=400&amp;crop=1",
"publishedAt": "2016-12-20T21:07:18Z"
})
        .expect(200)
        .end(function(err,res){
           if (err) {
                throw err;
          }
           res.text.should.be.equal("News inserted");
          done();
        });

  });
 
    it("should handle and send the JSON data", function(done){
    server
        .put("/news/update")
        .send({"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter","comments":"Comments to update"})
       .expect(200)
        .end(function(err,res){
           if (err) {
                throw err;
          }
           res.text.should.be.equal("news updated");
          done();
        });

  });
it("should handle and send the JSON data", function(done){
    server
        .delete("/news/delete")
        .send({"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter"})
       .expect(200)
        .end(function(err,res){
           if (err) {
                throw err;
          }
           res.text.should.be.equal("news deleted");
          done();
        });

  });

it('userclean',userClean());
it('Newsclean',newsClean());





});







