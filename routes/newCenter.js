var express = require('express');
var router = express.Router();

var db = require('./../config/db.js');

// 引入数据库并连接
var mysql = require('mysql');
var connection = mysql.createConnection(db.mysqlDb);
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var num = 10;
  var count;
  var selectSql = 'SELECT * FROM news';
   // var selectSql='select * from user limit'+ (pages - 1) * limit + ','+ limit;
    connection.query(selectSql,function(err,result){
      if(err) return console.error(err);
        count = result.length;
        res.render('newCenter',{count:count,num:num});
    })
});

router.post('/', function(req, res, next) {  
    var page = parseInt(req.body.page);    
    // console.log(page)        //总条数
    var limit = parseInt(req.body.limit);            //每页显示记录条数  
    var selectSql = 'select * from news limit '+ (page - 1) * limit + ","+ limit;
    // console.log(selectSql);
    // var selectSql='select * from user order by user_id limit'+ (pages - 1) * limit + ','+ limit;
    connection.query(selectSql,function(err,result){
  		if(err) return console.error(err);
        console.log(result);
        res.send(result);
  	})
});

module.exports = router;
