const config = require('config');
const mysql = require('mysql');

var conn = mysql.createConnection({
  host: config.get('db.host'),
  user: config.get('db.user'),
  password: config.get('db.pass'),
  database: config.get('db.database')
});


conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log("Connected!");
});


