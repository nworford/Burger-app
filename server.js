var express = require("express");
var bodyparser = require("body-parser");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handleBars = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");
var app = express();
// const PORT = process.env.PORT || 3000;
var PORT = process.env.PORT || 3000;
var connection = require('./config/connections.js');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/", routes);

app.engine("handlebars", handleBars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function(){
//     console.log("listening on port " + server.address().port);
// });

connection.connect(function(err) {
    if (err) throw err;
    if(!err) {
        app.listen(PORT, (err)=>{
            if(!err) {
                console.log('listening on port: ' + PORT);
            }
            });
    }
    console.log("Connected!");
  });



