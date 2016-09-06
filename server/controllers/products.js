var mongoose = require("mongoose");
var Product = mongoose.model("Product");
var Bid = mongoose.model("Bid");
module.exports = (function(){
	return{
		index: function(req,res){
			Product.find({}).populate("productBids").exec(function(err,data){
				if(err){
					res.json(err);
				}else{
					Product.populate(data,{path:"productBids.bider", model: "User"},function(err,finaldata){
						if(err){
							res.json(err);
						}else{
							res.json(finaldata);
						}
					});
				}
			});
		},
		create: function(req,res){
			var newProduct = new Product({productName: req.body.productName});
			newProduct.save(function(err,data){
				if(err){
					res.json(err);
				}else{
					res.json(data);
				}
			});
		}
	}
})();