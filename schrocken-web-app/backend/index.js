// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql      = require('mysql');
// // https://github.com/mysqljs/mysql
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '88888888',
//   database : 'sys'
// });

// // Initialize the app
// const app = express();

// // https://expressjs.com/en/guide/routing.html
// app.get('/posts', function (req, res) {
//     connection.connect();

//     connection.query('SELECT * FROM user', function (error, results, fields) {
//       if (error) throw error;
//       res.send(results)
//     });

//     connection.end();
// });
// // Start the server
// app.listen(3006, () => {
//  console.log('Go to http://localhost:300/user to see posts');
// });

/* ***************** */

// var express    = require("express");
// var mysql = require('mysql');
// var app = express();
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '88888888',
//   database : 'sys'
// });
// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... nn");    
// } else {
//     console.log("Error connecting database ... nn");    
// }
// });
// app.get("/",function(req,res){
// connection.query('SELECT * from user ', function(err, rows, fields) {
// console.log(err+''+ rows+''+ fields);
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
//   connection.end();
// });
// });
// app.listen(3006, () => {
//   console.log('Go to http://localhost:3006/user to see posts');
// });

/* 8*************** */

var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '88888888',
  database : 'sys'
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT email FROM user where iduser=2", function (err, result, fields) {
    if (err) throw err;
    console.log(err);
    console.log("result->");
    
    console.log(result);
    console.log("fields->");

   // console.log(fields);
  });
});
