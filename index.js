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

io.on("connection", (socket) => {
	console.log("socket id: ", socket.id);
	let userSocketId = socket.id;
	io.sockets.sockets[userSocketId].emit("firstNumber", 100);
	socket.on("number", (currentNumber) => {
		if ((currentNumber + 1) % 3 === 0) {
			currentNumber++;
		} else if ((currentNumber - 1) % 3 === 0) {
			currentNumber--;
		}
		console.log("currentNumber: ", currentNumber + 1);
		io.sockets.sockets[userSocketId].emit("nextNumber", currentNumber / 3);
	});
});
