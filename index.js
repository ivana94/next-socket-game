// server setup
const app = require("express")();
let port = process.env.PORT || 3000;

// socket setup
const server = require("http").Server(app);
const io = require("socket.io")(server, {
	origins: "localhost:3000 || https://matijevic-got.herokuapp.com/*",
});

// Next.js setup
const dev = process.env.NODE_END !== "production";
const nextApp = require("next")({ dev });
const nextHandler = nextApp.getRequestHandler();

// import helpers
const {
	addPlayerToGame,
	switchPlayer,
	modifyCurrentNumberToMakeDivisibleByThree,
} = require("./lib/game");

nextApp.prepare().then(() => {
	app.get("*", (req, res) => {
		return nextHandler(req, res);
	});

	server.listen(port, () => console.log(`listening on ${port}!`));
});

let game = {
	player1: "",
	player2: "",
	move: "",
	currentNumber: null,
};
let player;

io.on("connection", (socket) => {
	console.log(`user with socket id of ${socket.id} just connected!`);

	// when players connect, add them to "game" object
	game = addPlayerToGame(game, socket);
	player = "player1";

	if (game.player1 === socket.id) {
		socket.emit("player1");
	}

	// when we have two players, let all connected sockets know the game can start
	if (game.player1 && game.player2) {
		io.sockets.emit("gameReadyToStart");
	}

	// runs when a player chooses to start the game
	socket.on("startGame", () => {
		// send message to one player with the random number
		io.sockets.sockets[game[player]].emit(
			"startGame",
			Math.floor(Math.random() * 100)
		);
		// send message to other player to notify game is starting
		io.sockets.sockets[game[switchPlayer(player)]].emit("startGame");
	});

	// responsible for doing all the calculations (+1, -1, neutral, divide by 3)
	socket.on("number", (currentNumber) => {
		game = modifyCurrentNumberToMakeDivisibleByThree(game, currentNumber);
		player = switchPlayer(player);
		io.sockets.sockets[game[player]].emit("nextNumber", {
			...game,
			currentNumber: game.currentNumber / 3,
		});
	});

	// when a player refreshes/closes tab, remove them from "game" and allow another user to connect
	socket.on("disconnect", () => {
		if (game.player1 === socket.id) {
			game.player1 = "";
		} else {
			game.player2 = "";
		}
	});
});
