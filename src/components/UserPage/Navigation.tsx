import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const defaultStyle = {
		display: "flex",
		height: "60px",
		cursor: "pointer",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: "16px",
		paddingRight: "16px",
	};

	return (
		<div className="flex w-full border-t-[1px] border-[#3E3F41] pt-1 font-semibold text-[#A2B3B8]">
			<NavLink
				end
				to=""
				style={defaultStyle}
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-[#0866FF] text-[#0866FF]"
						: "rounded-lg hover:bg-[#3A3B3C]"
				}
			>
				Posts
			</NavLink>
			<NavLink
				to="friends"
				style={defaultStyle}
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-[#0866FF] text-[#0866FF]"
						: "rounded-lg hover:bg-[#3A3B3C]"
				}
			>
				Friends
			</NavLink>
			<NavLink
				to="photos"
				style={defaultStyle}
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-[#0866FF] text-[#0866FF]"
						: "rounded-lg hover:bg-[#3A3B3C]"
				}
			>
				Photos
			</NavLink>
		</div>
	);
};

export default Navigation;
