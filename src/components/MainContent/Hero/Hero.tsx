import React from "react";
import "./hero.scss";
import ButtonDetails from "../../ButtonDetails/ButtonDetails";

type HeroType = {
	image: string;
	name: string;
	details: string;
};

const Hero = ({ image, name, details }: HeroType) => {
	return (
		<header className="hero">
			<div className="hero__image">
				<img
					className="hero__image-picture"
					src={image}
					alt={name}
				/>
			</div>

			<div className="hero__info">
				<h1 className="hero__name">{name}</h1>
				<span className="hero__details">{details}</span>
			</div>

			<ButtonDetails />
		</header>
	);
};

export default Hero;
