import React, { useState, useEffect } from "react";
import PreGame from "./PreGame";
import Numbers from "./Numbers";
import { useSockets } from "./hooks/useSockets";
import { socket, initSocket } from "./socket";

initSocket();

/*
	Here in the client, there are two big things I have to be concerned with:
		1. what to render in the pre-game status
			- I define "pre-game" here as anything I have to show before the randomly generated number is sent to a player
		2. render the numbers 
*/

export default function Main() {
	const [
		currentNumber,
		move,
		isWinner,
		gameReadyToStart,
		startGame,
	] = useSockets(socket);

	return (
		<div className="game-container">
			<PreGame
				gameReadyToStart={gameReadyToStart}
				startGame={startGame}
				currentNumber={currentNumber}
			/>

			<Numbers currentNumber={currentNumber} move={move} />
			{isWinner && <h3>you've won!</h3>}

			<style jsx global>{`
				body {
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				body > div {
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</div>
	);
}
