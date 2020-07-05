import React, { useState, useEffect } from "react";
import { socket, initSocket } from "./socket";

initSocket();

export default function Medium() {
	const [currentNumber, setCurrentNumber] = useState();

	useEffect(() => {
		setTimeout(() => {
			if (currentNumber) {
				socket.emit("number", currentNumber);
			}
		}, 3000);
	}, [currentNumber]);

	socket.on("firstNumber", (num) => {
		setCurrentNumber(num);
	});

	socket.on("nextNumber", (num) => {
		setCurrentNumber(num);
	});
	return (
		<div>
			<h1>{currentNumber}</h1>
		</div>
	);
}
