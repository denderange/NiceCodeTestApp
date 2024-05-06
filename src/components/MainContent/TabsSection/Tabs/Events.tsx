import React from "react";
import "./tabs.scss";
import imgEvent from "../../../../../public/assets/images/event-1.png";
import ImgCamera from "../../../../../public/assets/icons/video-camera.svg";
import ImgCalendar from "../../../../../public/assets/icons/calendar.svg";
import ImgClock from "../../../../../public/assets/icons/clock.svg";

const Events = () => {
	return (
		<>
			{[...Array(4)].map((item) => (
				<article
					className="event-note"
					key={item}
				>
					<img
						className="event-note__img"
						src={imgEvent}
						alt={`event ${item}`}
					/>
					<div className="event-note__details">
						<h3 className="event-note__title">
							Тяга резинки в шаге со сгибанием локтя под 90 градусов{" "}
						</h3>

						<div className="event-note__details-items">
							<div className="event-note__detail-item">
								<ImgCamera /> Вебинар
							</div>
							<div className="event-note__detail-item">
								<ImgCalendar /> 9 марта 2021
							</div>
							<div className="event-note__detail-item">
								<ImgClock /> 17:00
							</div>
						</div>
					</div>
				</article>
			))}
		</>
	);
};

export default Events;
