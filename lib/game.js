module.exports.modifyCurrentNumberToMakeDivisibleByThree = function (
	game,
	currentNumber
) {
	console.log("currentNumber: ", currentNumber);
	if ((currentNumber + 1) % 3 === 0) {
		return {
			...game,
			currentNumber: ++currentNumber,
			move: "+",
		};
	} else if ((currentNumber - 1) % 3 === 0) {
		return {
			...game,
			currentNumber: --currentNumber,
			move: "-",
		};
	} else {
		return {
			...game,
			currentNumber: currentNumber,
			move: "=",
		};
	}
};

module.exports.addPlayerToGame = function (game, socket) {
	if (!game.player1) {
		return {
			...game,
			player1: socket.id,
		};
	}
	return {
		...game,
		player2: socket.id,
	};
};

module.exports.switchPlayer = function (player) {
	if (player === "player1") {
		return "player2";
	}
	return "player1";
};
