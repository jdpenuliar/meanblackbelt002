var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	userName: {type: String, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("User",UserSchema);