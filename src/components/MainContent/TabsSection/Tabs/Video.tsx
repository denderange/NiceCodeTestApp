import React from "react";
import "./tabs.scss";
import { videos } from "../../../../data/videos";
import { nanoid } from "nanoid";

const Video = () => {
	return (
		<>
			{videos.map((video) => (
				<article
					className="video-note"
					key={nanoid()}
				>
					<img
						className="video-note__img"
						src={video.videoImg}
						alt="video"
					/>

					<div className="video-note__details">
						<h3 className="video-note__title">{video.description}</h3>
						<span className="video-note__author">{video.author}</span>
					</div>

					<div className="video-note__date">{video.date}</div>
				</article>
			))}
		</>
	);
};

export default Video;
