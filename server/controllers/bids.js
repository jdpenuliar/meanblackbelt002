var mongoose = require("mongoose");
var Bid = mongoose.model("Bid");
var Product = mongoose.model("Product");
module.exports = (function(){
	return{
		index: function(req,res){
			Bid.find({}).populate("bider").populate("biderProduct").exec(function(err,data){
				if(err){
					console.log("hahaha boo!");
					res.json(err);
				}else{
					res.json(data);
				}
			});
		},
		create: function(req,res){
			console.log("-------------------Bid\n",req.body);
			Product.findOne({_id: req.body.productId},function(err,data){
				if(err){
					res.json(err);
				}else{
					var newBid = new Bid({bider: req.body.bider.data._id, bid: req.body.bid, biderProduct: req.body.productId});
					data.productBids.push(newBid);
					data.save(function(err,data){
						newBid.save(function(err,data){
							if(err){
								res.json(err);
							}else{
								res.json(data);
							}
						});
					});
					
				}
			});
		}
	}
})();