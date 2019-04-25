var chatrooms = require("../controllers/chatroomController");

module.exports = function(app) {
	app.route("/chatrooms")
		.post(chatrooms.create)
		.get(chatrooms.read)
		.put(chatrooms.update)
		.delete(chatrooms.delete);
};