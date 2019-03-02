// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pantry = {
    selectAll: function(cb){
        orm.selectAll("ingredients", function(res){
            cb(res);
        })
    }
}

module.exports = pantry;