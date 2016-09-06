var users = require("./../controllers/users.js");
var products = require("./../controllers/products.js");
var bids = require("./../controllers/bids.js");
module.exports = function(app){
	app.get("/users",function(req,res){
		users.index(req,res);
	});
	app.post("/users/check",function(req,res){
		users.check(req,res);
	});
	app.get("/products",function(req,res){
		products.index(req,res);
	});
	app.post("/products",function(req,res){
		products.create(req,res);
	});
	app.get("/bids",function(req,res){
		bids.index(req,res);
	});
	app.post("/bids",function(req,res){
		bids.create(req,res);
	});
}