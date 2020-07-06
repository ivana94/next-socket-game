import React, { useState, useEffect } from "react";
import { socket, initSocket } from "./socket";

initSocket();

export default function Medium() {
	const [currentNumber, setCurrentNumber] = useState();
	const [isWinner, setIsWinner] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (currentNumber && currentNumber !== 1) {
				socket.emit("number", currentNumber);
			}
		}, 3000);
	}, [currentNumber]);

	socket.on("firstNumber", (num) => {
		setCurrentNumber(num);
	});

	socket.on("nextNumber", (num) => {
		setCurrentNumber(num);
		if (num === 1) {
			return setIsWinner(true);
		}
	});
	return (
		<div>
			<h1>{currentNumber}</h1>
			{isWinner && <h3>you've won!</h3>}
		</div>
	);
}
