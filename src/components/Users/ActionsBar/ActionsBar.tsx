import "./actionsBar.scss";
import IconSearch from "../../../../public/assets/icons/icon-search.svg";
import IconFilter from "../../../../public/assets/icons/icon-filter.svg";
import IconPlus from "../../../../public/assets/icons/icon-plus.svg";
import React, { useState } from "react";
import Search from "../../Search/Search";

const ActionsBar = () => {
	const [searchBarIsActive, setSearchBarIsActive] = useState<boolean>(false);

	return (
		<div className="actionsBar">
			<div
				className={`actionsBar__container ${
					searchBarIsActive && "active-searchbar"
				}`}
			>
				<div className="actionsBar__search">
					<button
						className="btn-icon"
						onClick={() => setSearchBarIsActive(true)}
					>
						<IconSearch />
					</button>
				</div>

				<div className="actionsBar__actions">
					<button className="btn-icon">
						<IconFilter />
					</button>
					<button className="btn-icon">
						<IconPlus />
					</button>
				</div>
			</div>

			<Search
				searchBarIsActive={searchBarIsActive}
				setSearchBarIsActive={setSearchBarIsActive}
			/>
		</div>
	);
};

export default ActionsBar;
