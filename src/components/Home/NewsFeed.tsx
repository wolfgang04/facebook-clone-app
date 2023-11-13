import React from "react";
import Post from "../Post/Post";
import Sidebar from "../sidebar/Sidebar";
import Story from "./story/Story";

const NewsFeed = () => {
	return (
		<div className="flex justify-center bg-[#18191A]">
			<div className="mt-7 flex w-full">
				<Sidebar />

				<div className="max-w-[590px] px-8">
					<Story />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default NewsFeed;
