import React from "react";
import "./tabs.scss";
import { notes } from "../../../../data/notes";
import { nanoid } from "nanoid";
import ButtonDetails from "../../../ButtonDetails/ButtonDetails";
import imgMap from "../../../../../public/assets/images/img-map.png";

const Notes = () => {
	return (
		<div className="notes">
			{notes.map((note) => (
				<article
					className="notes__note"
					key={nanoid()}
				>
					<p className="notes__note-text">
						<span className="notes__note-date">{note.noteDate}</span>
						{note.noteText}
					</p>
					<div className="notes__note-btn">
						<ButtonDetails />
					</div>
				</article>
			))}

			<img
				className="notes__map"
				src={imgMap}
				alt="map"
			/>
		</div>
	);
};

export default Notes;
