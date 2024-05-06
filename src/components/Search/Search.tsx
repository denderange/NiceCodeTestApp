import React from "react";
import "./search.scss";
import IconSearch from "../../../public/assets/icons/icon-search.svg";
import IconClose from "../../../public/assets/icons/icon-close.svg";

type SearchT = {
	searchBarIsActive: boolean;
	setSearchBarIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ searchBarIsActive, setSearchBarIsActive }: SearchT) => {
	return (
		<div className={`searchbar ${!searchBarIsActive && "active-searchbar"}`}>
			<div className="searchbar__container">
				<IconSearch />
				<input
					className="searchbar__input"
					type="text"
				/>
			</div>
			<button
				className="btn-icon"
				onClick={() => setSearchBarIsActive(false)}
			>
				<IconClose className="searchbar__btn-close-icon" />
			</button>
		</div>
	);
};

export default Search;
