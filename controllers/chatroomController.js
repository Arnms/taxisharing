var Chatroom = require("mongoose").model("Chatroom");

exports.create = function(req, res, next) {
	var chatroom = new Chatroom(req.body);

	chatroom.save(function(err) {
		if(err) {
			res.json({

			});
		}
		else {
			res.json({

			});
		}
	});
};

exports.read = function(req, res, next) {

};

exports.update = function(req, res, next) {

};

exports.delete = function(req, res, next) {

};