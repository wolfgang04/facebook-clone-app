import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Friend from "../Friend";

// const profileImage = "./images/user.png";
const profileImage = "../../../../images/user.png";

const friends = [
	{ name: "Benedict Avenido", profile: profileImage, mutuals: 58 },
	{ name: "Jade Bayot Boang", profile: profileImage, mutuals: 53 },
	{ name: "Tyler DeLeon", profile: profileImage, mutuals: 58 },
	{ name: "Jake Anunciado", profile: profileImage, mutuals: 34 },
];

const Friends = () => {
	return (
		<div className="w-full max-w-6xl rounded-md bg-[#242526] px-5 py-3">
			<div className="mb-3 flex items-center justify-between">
				<h1 className="m-0 text-xl font-bold text-white">Friends</h1>

				<div className="flex items-center justify-center gap-2">
					<div className="flex h-9 items-center justify-center gap-1 rounded-2xl bg-[#3A3B3C] px-2">
						<SearchIcon style={{ color: "#888F98" }} />
						<input
							type="text"
							placeholder="Search"
							className="bg-inherit text-white focus:outline-none"
						/>
					</div>

					<span className="cursor-pointer rounded-lg px-3 py-[6px] text-[#6FABEF] hover:bg-[#3A3B3C]">
						Friend requests
					</span>
					<span className="cursor-pointer rounded-lg px-3 py-[6px] text-[#6FABEF] hover:bg-[#3A3B3C]">
						Find Friends
					</span>
				</div>
			</div>

			<div className="grid grid-cols-2 items-center justify-center gap-1">
				{friends.map((friend) => (
					<Friend
						name={friend.name}
						image={profileImage}
						numOfMutuals={friend.mutuals}
					/>
				))}
			</div>
		</div>
	);
};

export default Friends;
