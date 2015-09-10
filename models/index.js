var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Travel_bug_2");
module.exports.User = require("./user");