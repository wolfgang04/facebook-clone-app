import React from "react";
import Post from "../Post/Post";
import Sidebar from "../sidebar/Sidebar";

const NewsFeed = () => {
	return (
		<div className="flex justify-center bg-[#18191A]">
			<div className="mt-7 flex w-full">
				<Sidebar />

				<div className="px-8">
					<Post />
				</div>
			</div>
		</div>
	);
};

export default NewsFeed;
