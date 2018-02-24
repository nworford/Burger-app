var orm = require("../config/orm.js");

module.exports = {
    selectAll:function(callback){
        orm.selectAll("burgers", callback);
    },
    insertOne:function(burger_name, devoured, callback){
        orm.insertOne("burgers", ["burger_name", "devoured"],[burger_name, devoured],callback);
    },
    updateOne:function(column, value, id, callback){
        orm.updateOne("burgers", column, value, id, callback);
    }

}