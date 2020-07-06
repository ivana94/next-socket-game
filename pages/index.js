import React, { useState, useEffect } from "react";
import { useSockets } from "./hooks/useSockets";
import { socket, initSocket } from "./socket";

initSocket();

export default function Game() {
	const [
		currentNumber,
		move,
		isWinner,
		gameReadyToStart,
		startGame,
	] = useSockets(socket);

	return (
		<div className="game-container">
			{gameReadyToStart && (
				<button onClick={startGame}>start game</button>
			)}
			{!gameReadyToStart && !currentNumber && (
				<h1>waiting for players to connect!</h1>
			)}
			<h1>{currentNumber}</h1>
			<div className="move-container">
				<h2 className="move">
					{move === "=" ? move : move ? `${move}1` : ""}
				</h2>
			</div>
			{isWinner && <h3>you've won!</h3>}
			<style jsx>{`
				.game-container {
				}

				h1 {
					font-size: 3rem;
					font-family: "Helvetica Neue", Arial, sans-serif;
					font-weight: bold;
				}

				.move {
					border-radius: 50%;
					background: red;
					text-align: center;
				}
			`}</style>
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
