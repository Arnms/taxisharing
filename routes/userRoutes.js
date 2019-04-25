var users = require("../controllers/userController");

module.exports = function(app) {
	app.route("/users").post(users.create);
	app.route("/users").get(users.read);
	app.route("/users").put(users.update);
	app.route("/users").delete(users.delete);
};