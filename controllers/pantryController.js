var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pantry = require("../models/pantry.js");

router.get("/", function(req, res){
    pantry.selectAll(function(pantry_data){
        console.log(pantry_data);
        res.render("index");
    })
})

module.exports = router;