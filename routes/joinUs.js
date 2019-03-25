var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var db=require('./../config/db');
var connection=mysql.createConnection(db.mysqlDb);
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('joinUs');
});

router.post('/',function(req,res,next){
	var tel=req.body.tel;
	// console.log(tel);
	var selectSql="SELECT * FROM joinus WHERE tel='"+tel+"'";
	connection.query(selectSql,function(err,result){
		// 判断是否已存在
		if(result.length){
			res.send('0');
		}else{
			res.send('1');
		}
	})
})

module.exports = router;