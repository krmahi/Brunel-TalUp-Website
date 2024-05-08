import React from 'react';

import "../styles/AccordianItems.css"

const AccordianItem = ({ question, answer, isActive, onToggle }) => {
	return (
		<div className="divacc">
			<button
				className="accbutton"
				onClick={onToggle}
			>
				<span className="accquestion">{question}</span>
				<span className="accicon">{isActive ? '-' : '+'}</span>
			</button>
			{isActive && (
				<div className="pb-4 px-6">
					<p className="accanswer">{answer}</p>
				</div>
			)}
		</div>
	);
};

export default AccordianItem;
