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
					<h1>Click this button to start the game.</h1>
					<div className="button-container">
						<button onClick={startGame}>start game</button>
					</div>
				</React.Fragment>
			)}
			{!gameReadyToStart && !currentNumber && (
				<h1>waiting for players to connect.</h1>
			)}
			<style jsx>{`
				.button-container {
					text-align: center;
				}

				button {
					font-size: 1.5rem;
					color: black;
					text-transform: uppercase;
					background: #fff;
					padding: 30px 20px;
					border: 4px solid black;
					transition: all 1s ease;
				}

				button:hover {
					color: #ffffff;
					background: goldenrod;
					border-color: goldenrod;
					transition: all 1s ease;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
}
