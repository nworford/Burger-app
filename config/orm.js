var con = require("./connections.js");
module.exports = {
selectAll:function(table, callback){
    con.query("SELECT * FROM ?", [table], function(err, rows){
        if(err){
            throw new Error("Error!");
        }
        callback(rows);
    })
} ,

insertOne:function(table, columns, values, callback){
    con.query('INSERT INTO ?(?) VALUES (?)',[table, columns, values], function(err, rows){
        if(err){
            throw new Error("Error!");
        }
        callback && callback(rows);
    })
},

updateOne:function(table, column, value,id,callback){
    con.query('UPDATE ? SET ? = ? WHERE id = ?', [table, column, value, id], function(err, rows){
        if(err){
            throw new Error("Error!");
        }
        callback && callback(rows);
    })
}}

