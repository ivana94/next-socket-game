import React from "react";

export default function Numbers({ currentNumber, move }) {
	return (
		<div>
			<h1>{currentNumber}</h1>
			<div className="move-container">
				<h2 className="move">
					{move === "=" ? move : move ? `${move}1` : ""}
				</h2>
			</div>
		</div>
	);
}
