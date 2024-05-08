import React, { useState } from "react";

import AccordianItem from "./AccordianItems";
import "../styles/Accordian.css";

const Accordian = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="accdiv">
			{items.map((item, index) => (
				<AccordianItem
					key={index}
					question={item.question}
					answer={item.answer}
					isActive={index === activeIndex}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
};
export default Accordian;
