import React from "react";
import "./buttonDetails.scss";
import ImgButtonDetails from "../../../public/assets/icons/icon-dots.svg";

type ButtonDetailsT = {
	className?: string;
};
const ButtonDetails = ({ className }: ButtonDetailsT) => {
	const [showDetails, setShowDetails] = React.useState(false);

	return (
		<div className="btn-details">
			<button
				className={`btn-icon ${
					showDetails && "btn-details-active"
				} ${className}`}
				onClick={() => setShowDetails(!showDetails)}
			>
				<ImgButtonDetails />
			</button>

			<div
				className={`btn-details__actions ${
					!showDetails && "btn-details-menu-hidden"
				}`}
			>
				<button
					className="btn-details__actions-btn"
					onClick={() => alert("Изменить")}
				>
					Изменить
				</button>
				<button
					className="btn-details__actions-btn"
					onClick={() => alert("Удалить")}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default ButtonDetails;
