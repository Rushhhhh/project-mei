var express = require('express');
var router = express.Router();
var userModel = require("../model/user.js");

router.get("/",function(req,res){
	console.log('get');
})


router.post("/",function(req,res){
	console.log(req.body);
	
	userModel.create({
		phone:req.body.phone,
		password:req.body.password
	},function(error,info){
		if(!error){
			console.log(info);
			res.send("ok");
		}else{
			console.log(error)
		}
	})
})

module.exports = router ;
