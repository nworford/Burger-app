var express = require("express");

var burgers = require("../models/burgers.js");

var router = express.Router();

router.get("/", function(req, res){
    res.render("index");
});

router.post("/addBurger", function(req, res){
    res.send("post request recieved with burger name " + req.body.burger_name + " and devoured = " + req.body.devoured);
});

module.exports = router;