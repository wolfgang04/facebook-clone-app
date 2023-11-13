import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SidebarItem from "../../components/sidebar/SidebarItem";

const Sidebar = () => {
	const profile = process.env.PUBLIC_URL + "/images/user.png";

	return (
		<div className="w-[360px] px-3">
			<SidebarItem itemImg={profile} itemName="User Name" />
			<SidebarItem itemName="Friends">
				<PeopleIcon
					style={{ height: "32px", width: "32px", color: "#1A83F5" }}
				/>
			</SidebarItem>
			<SidebarItem itemName="Saved">
				<BookmarkIcon
					style={{ height: "32px", width: "32px", color: "#1A83F5" }}
				/>
			</SidebarItem>
		</div>
	);
};

export default Sidebar;
