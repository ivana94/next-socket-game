import React, { useState, useEffect } from "react";

export function useSockets(socket) {
	const [currentNumber, setCurrentNumber] = useState();
	const [move, setMove] = useState();
	const [isWinner, setIsWinner] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (currentNumber && currentNumber !== 1) {
				socket.emit("number", currentNumber);
			}
		}, 3000);
	}, [currentNumber]);

	socket.on("startGame", (num) => {
		setCurrentNumber(num);
		setIsWinner(false);
	});

	socket.on("nextNumber", ({ currentNumber: num, move }) => {
		setCurrentNumber(num);
		setMove(move);
		setIsWinner(false);
		if (num === 1) {
			return setIsWinner(true);
		}
	});

	const startGame = () => socket.emit("startGame");

	return [currentNumber, move, isWinner, startGame];
}
