var express = require('express');
var router = express.Router();
var cartModel = require("../model/cart.js");

router.get("/",function(req,res){
	console,log("get")
})


router.post("/",function(req,res){
	console.log(req.body);
	
	cartModel.create({
		who:req.body.who,
		info:req.body.info
	},function(error,info){
		if(!error){
			console.log(info);
			res.send(info);
		}else{
			console.log(error)
		}
	})
})

module.exports = router ;