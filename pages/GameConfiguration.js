import React from "react";

export default function GameConfiguration({
	handleChangeGameConfiguration,
	setToggleGameConfiguration,
	toggleGameConfiguration,
}) {
	return (
		<div className="gameconfiguration-container">
			<div>
				<h1>Configure the game.</h1>

				<label htmlFor="timer">
					how long should each turn last (in ms)?
				</label>
				<select name="timer" onChange={handleChangeGameConfiguration}>
					<option value="0">instant</option>
					<option value="1000">1s</option>
					<option value="2000">2s</option>
					<option value="3000">3s</option>
					<option value="4000">4s</option>
					<option value="5000">5s</option>
					<option value="6000">6s</option>
					<option value="7000">7s</option>
				</select>
				<button
					onClick={() =>
						setToggleGameConfiguration(!toggleGameConfiguration)
					}
				>
					done
				</button>
			</div>
			<style jsx>{`
				.gameconfiguration-container {
					height: 100vh;
					width: 100vw;
					position: fixed;
					left: 0;
					top: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #fff;
				}

				.gameconfiguration-container > div {
					border: 4px solid black;
					border-radius: 3px;
					height: 50vh;
					width: 50vw;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				label {
					font-family: sans-serif;
					font-size: 1.2rem;
					margin-bottom: 3vh;
				}

				select {
					width: 15vw;
					height: 5vh;
				}

				button {
					height: 10vh;
					border: 3px solid black;
				}
			`}</style>
		</div>
	);
}
