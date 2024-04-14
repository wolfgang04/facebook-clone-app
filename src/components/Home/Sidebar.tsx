import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SidebarItem from "../sidebar/SidebarItem";

const Sidebar = () => {
	const profile = window.location.origin + "/images/user.png";

	return (
		<div className="w-[360px] px-3">
			<SidebarItem itemImg={profile} itemName="User Name" id="username" />
			<SidebarItem itemName="Friends" id="friends">
				<PeopleIcon
					style={{ height: "32px", width: "32px", color: "#1A83F5" }}
				/>
			</SidebarItem>
			<SidebarItem itemName="Saved" id="saved">
				<BookmarkIcon
					style={{ height: "32px", width: "32px", color: "#1A83F5" }}
				/>
			</SidebarItem>
		</div>
	);
};

export default Sidebar;
