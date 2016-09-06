var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports = (function(){
	return{
		index: function(req,res){
			User.find({},function(err,data){
				if(err){
					res.json(err);
				}else{
					res.json(data);
				}
			});
		},
		check: function(req,res){
			User.findOne({userName: req.body.userName},function(err,data){
				if(err){
					res.json(err);
				}else if(data === null){
					var newUser = new User({userName: req.body.userName});
					newUser.save(function(err,data){
						res.json(data);
					});
				}else{
					res.json(data);
				}
			});
		}
	}
})();