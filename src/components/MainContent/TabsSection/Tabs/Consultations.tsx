import React from "react";
import "./tabs.scss";
import { consultations } from "../../../../data/consultations";
import IconCamera from "../../../../../public/assets/icons/icon-camera.svg";
import IconPeople from "../../../../../public/assets/icons/icon-people.svg";
import { nanoid } from "nanoid";

const Consultations = () => {
	const renderIcon = (kind: string) => {
		if (kind === "Online консультация") {
			return <IconCamera />;
		} else if (kind === "Личный прием") {
			return <IconPeople />;
		}
	};

	return (
		<>
			{consultations.map((consultation) => (
				<article
					className="consultation"
					key={nanoid()}
				>
					<div className="consultation__icon">
						{renderIcon(consultation.kind)}
					</div>

					<div className="consultation__details">
						<h3 className="consultation__title">{consultation.kind}</h3>
						<span className="consultation__date">
							{consultation.date},{consultation.time}
						</span>
					</div>

					<div className="consultation__status">{consultation.status}</div>
				</article>
			))}
		</>
	);
};

export default Consultations;
