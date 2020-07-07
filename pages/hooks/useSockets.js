import React, { useState, useEffect } from "react";

export function useSockets(socket) {
	// currentNumber = number to show on screen
	const [currentNumber, setCurrentNumber] = useState();

	// move = did we +1, -1, or +0  the previous number/3?
	const [move, setMove] = useState();
	const [isWinner, setIsWinner] = useState(false);

	// gameReadyToStart = boolean to indicate
	const [gameReadyToStart, setGameReadyToStart] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (currentNumber && currentNumber !== 1) {
				socket.emit("number", currentNumber);
			}
		}, 3000);
	}, [currentNumber]);

	socket.on("gameReadyToStart", () => {
		setGameReadyToStart(true);
	});

	socket.on("startGame", (num) => {
		setGameReadyToStart(false);
		setIsWinner(false);
		if (num) {
			setCurrentNumber(num);
		}
	});

	socket.on("nextNumber", ({ currentNumber: num, move }) => {
		console.log("num: ", num);
		setCurrentNumber(num);
		setMove(move);
		setIsWinner(false);
		if (num === 1) {
			return setIsWinner(true);
		}
	});

	const startGame = () => {
		socket.emit("startGame");
	};

	return [currentNumber, move, isWinner, gameReadyToStart, startGame];
}
