import React from "react";

interface story {
	user: string;
	profile: string;
	storyImage: string[];
}

interface Props {
	story: story;
	onView: (storyDetails: story) => void;
}

const StoryCard: React.FC<Props> = (props) => {
	const storyStyle = {
		backgroundImage: `url(${props.story.storyImage[0]})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const handleViewStory = () => {
		props.onView({
			user: props.story.user,
			profile: props.story.profile,
			storyImage: props.story.storyImage,
		});
	};

	return (
		<div
			className="h-[250px] flex-shrink-0 w-36 cursor-pointer rounded-lg bg-white p-1 hover:opacity-80"
			style={storyStyle}
			onClick={handleViewStory}
		>
			<div className="justify-between flex-col flex h-full p-2">
				<img
					src={props.story.profile}
					alt="user profile"
					className="rounded-full w-10 h-10"
				/>

				<p className="text-sm font-semibold text-white">
					{props.story.user}
				</p>
			</div>
		</div>
	);
};

export default StoryCard;
