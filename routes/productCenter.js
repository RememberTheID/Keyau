var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'keyau'
});
connection.connect();
/* GET home page. */
var num=1;
var obj=new Object();
router.get('/', function(req, res, next) {
	num=num*10-9;
	var sql='SELECT * FROM product LIMIT '+num+',10';
	var res=res;
	connection.query(sql,function(err,result,){
		if(err) return console.log(err);
		obj=result;
		res.render('productCenter',{});
})
	// res.render('productCenter',{img0:obj[0].img});
});
module.exports = router;
