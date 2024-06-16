import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface Props {
	Icon: React.ComponentType<SvgIconProps>;
	label: string;
}

const PostInteraction: React.FC<Props> = ({ Icon, label }) => {
	return (
		<div className="flex flex-grow justify-center items-center h-full rounded-md pt-2 pb-2 text-[#e4e6eb] gap-2 cursor-pointer hover:bg-[#4E4F50]">
			<Icon sx={{ color: "#e4e6eb" }} /> <p>{label}</p>
		</div>
	);
};

export default PostInteraction;
