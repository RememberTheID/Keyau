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
var sql='SELECT * FROM keyau';
	connection.query(sql,function(err,result){
		if(err) return console.log(err);
	router.get('/', function(req, res, next) {
	res.render('index',{
		new1:result[0].new,date1:result[0].newtime,
		new2:result[1].new,date2:result[1].newtime,
		new3:result[2].new,date3:result[2].newtime,
		new4:result[3].new,date4:result[3].newtime,
		new5:result[4].new,date5:result[4].newtime,
		new6:result[5].new,date6:result[5].newtime,
	})
});
	});
/* GET home page. */
module.exports = router;

