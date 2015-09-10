var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Travel_bug_3");
module.exports.User = require("./user");
module.exports.Place = require("./place");