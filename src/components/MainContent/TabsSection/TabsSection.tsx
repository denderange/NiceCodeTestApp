import React from "react";
import "./tabsSection.scss";
import IconPlus from "../../../../public/assets/icons/icon-plus-button.svg";
import Notes from "./Tabs/Notes";
import Consultations from "./Tabs/Consultations";
import Video from "./Tabs/Video";
import Events from "./Tabs/Events";

type TabsT = {
	[key: string]: React.JSX.Element;
};

const TabsSection = () => {
	const [isActiveTab, setIsActiveTab] = React.useState<string>("notes");

	const tabButtons = [
		{ name: "notes", text: "Заметки" },
		{ name: "consultations", text: "Консультации" },
		{ name: "video", text: "Видео" },
		{ name: "events", text: "Мероприятия" },
	];

	const tabs: TabsT = {
		notes: <Notes />,
		consultations: <Consultations />,
		video: <Video />,
		events: <Events />,
	};

	const handleTabBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsActiveTab(e.currentTarget.name);
	};

	return (
		<section className="tabs">
			<div className="tabs__nav-buttons">
				<div className="tabs__nav">
					{tabButtons.map((tabBtn) => (
						<button
							className={`tabs__nav-btn ${
								isActiveTab === tabBtn.name && "active-tab-btn"
							}`}
							name={tabBtn.name}
							key={tabBtn.name}
							onClick={(e) => handleTabBtn(e)}
						>
							{tabBtn.text}
						</button>
					))}
				</div>

				<div className="tabs__actions">
					<button className="tabs__actions-new">
						<span className="tabs__actions-new-text">Новая заметка</span>
						<IconPlus />
					</button>
				</div>
			</div>

			<div className="tabs__content">{tabs[isActiveTab]}</div>
		</section>
	);
};

export default TabsSection;
