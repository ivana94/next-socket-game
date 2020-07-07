import React, { useState } from "react";
import GameConfiguration from "./GameConfiguration";

export default function PreGame({
	gameReadyToStart,
	startGame,
	currentNumber,
	isPlayer1,
	handleChangeGameConfiguration,
}) {
	const [toggleGameConfiguration, setToggleGameConfiguration] = useState(
		false
	);
	return (
		<div>
			{toggleGameConfiguration && isPlayer1 && (
				<GameConfiguration
					handleChangeGameConfiguration={
						handleChangeGameConfiguration
					}
					setToggleGameConfiguration={setToggleGameConfiguration}
					toggleGameConfiguration={toggleGameConfiguration}
				/>
			)}
			{isPlayer1 && (
				<p
					onClick={() =>
						setToggleGameConfiguration(!toggleGameConfiguration)
					}
				>
					would you like to set the speed of the game? (beta)
				</p>
			)}
			{gameReadyToStart && (
				<React.Fragment>
					<h1>Click to start.</h1>
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

				p {
					font-size: 1.2rem;
					font-family: sans-serif;
				}
			`}</style>
		</div>
	);
}
