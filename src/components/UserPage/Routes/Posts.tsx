import React from "react";
import Post from "../../Post/Post";
import Bio from "../Bio";
import Photos from "../Photos";
import Friends from "../Friends";

const Posts = () => {
	return (
		<div className="flex w-full max-w-6xl justify-between">
			<div className="flex w-[40%] flex-col gap-3">
				<Bio />
				<Photos />
				<Friends />
			</div>

			<div className="w-[57%]">
				<Post />
			</div>
		</div>
	);
};

export default Posts;
