import React, { useState } from "react";
import "./userWorkpiece.scss";
import IconAlert from "../../../../public/assets/icons/icon-alert.svg";
import IconTg from "../../../../public/assets/icons/icon-tg.svg";
import ImgUserBlank from "../../../../public/assets/users/blank-user.png";

type UserWorkpieceType = {
	image: string;
	name: string;
	status: string;
};

const UserWorkpiece = ({ image, name, status }: UserWorkpieceType) => {
	const showStatus = (status: string) => {
		if (status === "tg") {
			return <IconTg />;
		} else if (status === "alert") {
			return <IconAlert />;
		} else {
			return null;
		}
	};

	return (
		<div
			className={`workpiece  ${name === "Рожков Денис" && "workpiece-active"}`}
		>
			<img
				className="workpiece__image"
				src={image.length !== 0 ? image : ImgUserBlank}
				alt={name}
			/>
			<p className="workpiece__name">{name}</p>
			<span className="workpiece__icon">{showStatus(status)}</span>
		</div>
	);
};

export default UserWorkpiece;
