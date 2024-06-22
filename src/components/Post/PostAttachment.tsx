import { SvgIconProps } from "@mui/material";
import React from "react";
import classes from "./PostAttachment.module.css";

interface Props {
	Icon: React.ComponentType<SvgIconProps>;
	label: string;
	style: object;
}

const PostAttachment: React.FC<Props> = ({ Icon, label, style }) => {
	const Style = { ...style, height: "32px", width: "32px" };

	return (
		<div
			className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C ${classes.tooltip}`}
		>
			<Icon style={Style} />
			<span className={classes.tooltiptext}>{label}</span>
		</div>
	);
};

export default PostAttachment;
