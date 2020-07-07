import React from "react";

export default function Numbers({ currentNumber, move }) {
	return (
		<div className="numbers-container">
			<h1>{currentNumber}</h1>
			<div className="move-container">
				<h2 className="move">
					{move === "=" ? move : move ? `${move}1` : ""}
				</h2>
			</div>
			<style jsx>{`
				.numbers-container {
					width: 100px;
					height: 100px;
					text-align: center;
				}

				.move {
					background: goldenrod;
					text-align: center;
				}
			`}</style>
		</div>
	);
}
