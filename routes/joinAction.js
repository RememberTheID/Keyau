var express=require('express');
var router=express.Router();

var db=require('./../config/db.js');
var mysql=require('mysql');
var connection=mysql.createConnection(db.mysqlDb);
connection.connect();

// 插入数据库
router.post('/',function(req,res,next){
	// console.log(req);
	var newName=req.body.name;
	var newTel=req.body.tel;
	var newMail=req.body.mail;
	var newMess=req.body.mess;
	// console.log(newMail);
	var insertSql='INSERT INTO joinus(name,tel,mail,mess) VALUE(?,?,?,?)';
	var insertData=[newName,newTel,newMail,newMess];
	connection.query(insertSql,insertData,function(err,result){
		if(err) return console.error(err);
		res.render('joinUs');
	})
})

module.exports=router;
