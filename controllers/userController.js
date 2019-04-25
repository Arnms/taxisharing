var User = require("mongoose").model("User");

exports.create = function(req, res, next) {
	var user = new User(req.body);
	var result;

	user.save(function(err) {
		if(err) {
			res.status(400).json({ result: 1 });
		}
		else {
			res.status(200).json({ result: 0 });
		}
	});
};

exports.read = function(req, res, next) {

};

exports.update = function(req, res, next) {

};

exports.delete = function(req, res, next) {

};