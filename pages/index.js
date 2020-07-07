import React, { useState, useEffect } from "react";
import PreGame from "./PreGame";
import Game from "./Game";
import { useSockets } from "./hooks/useSockets";
import { useStatefulFields } from "./hooks/useStatefulFields";
import { socket, initSocket } from "./socket";

initSocket();

export default function Main() {
	const [
		gameConfiguration,
		handleChangeGameConfiguration,
	] = useStatefulFields();
	const [
		currentNumber,
		move,
		isWinner,
		gameReadyToStart,
		startGame,
		gameStarted,
		isPlayer1,
	] = useSockets(socket, gameConfiguration.timer);

	return (
		<React.Fragment>
			<div className="title-container">
				<h1 className="title">game of three.</h1>
			</div>
			{!gameStarted && (
				<PreGame
					gameReadyToStart={gameReadyToStart}
					startGame={startGame}
					currentNumber={currentNumber}
					isPlayer1={isPlayer1}
					gameConfiguration={gameConfiguration}
					handleChangeGameConfiguration={
						handleChangeGameConfiguration
					}
				/>
			)}

			<Game currentNumber={currentNumber} move={move} />
			{isWinner && <h3 className="winner">you've won 🎉</h3>}

			<style jsx global>{`
				body {
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				body > div {
					height: 100%;
				}

				h1 {
					font-size: 3rem;
					font-family: "Helvetica Neue", Arial, sans-serif;
					font-weight: bold;
				}

				h2 {
					font-size: 2.5rem;
					font-family: sans-serif;
				}

				h3 {
					font-size: 1.8rem;
					font-family: sans-serif;
				}

				.title-container {
					width: 90vw;
					border-bottom: 1px solid black;
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

				.winner {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
			`}</style>
		</React.Fragment>
	);
}
