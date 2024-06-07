import React from "react";

interface Props {
	user: string;
	profile: string;
	storyImage: string[];
}

const StoryUser: React.FC<Props> = (props) => {
	return (
		<div className="hover:bg-[#3A3B3C] cursor-pointer rounded-md flex gap-3 mx-2 p-3">
			<img className="rounded-full h-14 w-14" src={props.profile} />
			<div className="flex justify-center flex-col">
				<p className="text-white">{props.user}</p>
				<p className="text-[#B0B3B8]">{props.storyImage.length} new</p>
			</div>
		</div>
	);
};

export default StoryUser;
