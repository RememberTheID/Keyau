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
router.post('/',function(req,res,next){
	// console.log(req.body)
	var user=req.body.user;
	var tel=req.body.tel;
	var depict=req.body.depict;
	var sql='INSERT INTO tel(user,tel,depict) VALUE(?,?,?)';
	var insert=[user,tel,depict];
	connection.query(sql,insert,function(err,result){
		if(err) return console.log(err);
		console.log(result)
		if(result.insertId){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tel', { title: 'Express' });
});

module.exports = router;
