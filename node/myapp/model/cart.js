
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var obj = {
	who:String,
	info:String
}

var model = mongoose.model("cart",new Schema(obj));

module.exports = model;