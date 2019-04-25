module.exports = function(io) {
	io.sockets.on("connection", function(socket) {
		console.log("new user connected");

		socket.on("joinRoom", function(data) {
			socket.join(data.roomName);
			console.log(data.id + " join room : " + data.roomNo);
		});

		socket.on("leaveRoom", function(data) {
			socket.leave(data.id);
			console.log(data.id + " out room : " + data.roomNo)
		});

		socket.on("disconnect", function() {
			console.log("user disconnected");
		});
	});
};