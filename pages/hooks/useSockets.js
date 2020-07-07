import React, { useState, useEffect } from "react";

export function useSockets(socket, timer) {
	// currentNumber = number to show on screen
	const [currentNumber, setCurrentNumber] = useState();

	// move = did we +1, -1, or +0  the previous number/3?
	const [move, setMove] = useState();
	const [isWinner, setIsWinner] = useState(false);

	// gameReadyToStart = boolean to indicate if two players are online and ready to play
	const [gameReadyToStart, setGameReadyToStart] = useState(false);

	// gameStarted = boolean to indicate if "start game" has been pressed
	const [gameStarted, setGameStarted] = useState(false);

	// determine who player1 is. only player1 can configure game
	const [isPlayer1, setIsPlayer1] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (currentNumber && currentNumber !== 1) {
				socket.emit("number", currentNumber);
			}
		}, timer || 3000);
	}, [currentNumber]);

	socket.on("player1", () => {
		setIsPlayer1(true);
	});

	socket.on("gameReadyToStart", () => {
		setGameReadyToStart(true);
	});

	socket.on("startGame", (num) => {
		setGameReadyToStart(false);
		setGameStarted(true);
		setIsWinner(false);
		if (num) {
			setCurrentNumber(num);
		}
	});

	socket.on("nextNumber", ({ currentNumber: num, move }) => {
		setCurrentNumber(num);
		setMove(move);
		setIsWinner(false);
		if (num === 1) {
			return setIsWinner(true);
		}
	});

	const startGame = () => {
		setGameStarted(true);
		socket.emit("startGame");
	};

	return [
		currentNumber,
		move,
		isWinner,
		gameReadyToStart,
		startGame,
		gameStarted,
		isPlayer1,
	];
}
