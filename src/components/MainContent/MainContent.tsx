import React from "react";
import "./maincontent.scss";
import Hero from "./Hero/Hero";
import CurrentUserPhoto from "../../../public/assets/users/current-user.png";
import TabsSection from "./TabsSection/TabsSection";

const MainContent = () => {
	// userName и userDetails нужно брать из state или store или
	// еще как-то. Но пока - хардкод...
	const userName = "Рожков Денис Петрович";
	const userDetails = "30 лет, муж";

	return (
		<main className="main">
			<Hero
				image={CurrentUserPhoto}
				name={userName}
				details={userDetails}
			/>
			<TabsSection />
		</main>
	);
};

export default MainContent;
