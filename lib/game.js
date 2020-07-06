module.exports.modifyCurrentNumberToMakeDivisibleByThree = function (
	currentNumber,
	game
) {
	if ((currentNumber + 1) % 3 === 0) {
		currentNumber++;
		game.move = "+";
	} else if ((currentNumber - 1) % 3 === 0) {
		currentNumber--;
		game.move = "-";
	} else {
		game.move = "=";
	}
	return currentNumber;
};

module.exports.addPlayerToGame = function (game, socket) {
	if (!game.player1) {
		game.player1 = socket.id;
	} else {
		game.player2 = socket.id;
	}
};

module.exports.switchPlayer = function (player) {
	if (player === "player1") {
		return "player2";
	}
	return "player1";
};
