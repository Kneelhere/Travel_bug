var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Travel_bug");
module.exports.User = require("./user");
module.exports.Place = require("./user");