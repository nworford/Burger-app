var mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database:"burgers_db"
    });
};

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"burgers_db"
//   });
  
  

  module.exports = connection;