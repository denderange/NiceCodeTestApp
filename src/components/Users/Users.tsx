import React from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import "./users.scss";
import Counter from "./Counter/Counter";
import UserWorkpiece from "./UserWorkpiece/UserWorkpiece";
import { usersData } from "../../data/usersData";
import { nanoid } from "nanoid";

const Users = () => {
	return (
		<section className="users">
			<ActionsBar />
			<Counter />
			{usersData.map((user) => (
				<UserWorkpiece
					key={nanoid()}
					image={user.image}
					name={user.name}
					status={user.status}
				/>
			))}
		</section>
	);
};

export default Users;
