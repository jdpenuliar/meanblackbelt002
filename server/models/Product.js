var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
	productName: {type: String, required: true, minlength: 1},
	productBids: [{type: Schema.Types.ObjectId, ref:"Bid"}]
},{timestamps: true});
mongoose.model("Product",ProductSchema);