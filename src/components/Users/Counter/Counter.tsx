import React from "react";
import "./counter.scss";

const Counter = () => {
	return (
		<div className="counter-users">
			<span className="counter-users__count">213</span>
			<button className="counter-users__select">Выбрать</button>
		</div>
	);
};

export default Counter;
