import React from "react";

export default function PreGame({
	gameReadyToStart,
	startGame,
	currentNumber,
}) {
	return (
		<div>
			{gameReadyToStart && (
				<React.Fragment>
					<h1>Click this button to start the game!</h1>
					<button onClick={startGame}>start game</button>
				</React.Fragment>
			)}
			{!gameReadyToStart && !currentNumber && (
				<h1>waiting for players to connect!</h1>
			)}
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
		</div>
	);
}
