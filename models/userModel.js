var mongoose = require("mongoose");
Schema = mongoose.Schema;

var UserSchema = new Schema({
	id: {
		type: String,
		require: true
	},
	pw: {
		type: String,
		require: true
	}
});

mongoose.model("User", UserSchema);