var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    site_title : String,
    site_link : String,
    site_vote : String
});

module.exports = mongoose.model('site',schema);

