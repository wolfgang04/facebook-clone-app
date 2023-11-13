import React from "react";
import CreateStoryCard from "./CreateStoryCard";
import StoryCard from "./StoryCard";

const Story = () => {
	return (
		<div className="flex w-[590px] gap-2 pb-6 pt-2">
			<CreateStoryCard />
			<StoryCard user="user 1" />
			<StoryCard user="user 2" />
			<StoryCard user="user 3" />
		</div>
	);
};

export default Story;
