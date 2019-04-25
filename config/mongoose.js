var mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect("mongodb://localhost/database");

	// require('../app/models/beacon.server.model.js');

	return db;
}