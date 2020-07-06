// server setup
const app = require("express")();
let port = process.env.PORT || 3000;

// socket setup
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:3000" });

// Next setup
const dev = process.env.NODE_END !== "production";

const nextApp = require("next")({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
	app.get("*", (req, res) => {
		return nextHandler(req, res);
	});

	server.listen(port, () => console.log(`listening on ${port}!`));
});

let userSocketId;
const game = {
	player1: "",
	player2: "",
	move: "",
};
let player;

io.on("connection", (socket) => {
	console.log(`user with socket id of ${socket.id} just connected!`);
	if (!game.player1) {
		game.player1 = socket.id;
	} else {
		game.player2 = socket.id;
	}
	player = "player1";
	console.log(game);
	io.sockets.sockets[game[player]].emit("firstNumber", 100);
	socket.on("number", (currentNumber) => {
		if ((currentNumber + 1) % 3 === 0) {
			currentNumber++;
			game.move = "+";
		} else if ((currentNumber - 1) % 3 === 0) {
			currentNumber--;
			game.move = "-";
		} else {
			game.move = "";
		}
		player = switchPlayer(player);
		io.sockets.sockets[game[player]].emit("nextNumber", currentNumber / 3);
	});
	socket.on("disconnect", () => {
		if (game.player1 === socket.id) {
			game.player1 = "";
		} else {
			game.player2 = "";
		}
	});
});

function switchPlayer(player) {
	if (player === "player1") {
		return "player2";
	}
	return "player1";
}
