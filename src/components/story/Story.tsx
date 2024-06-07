import { useNavigate } from "react-router";
import CreateStoryCard from "./CreateStoryCard";
import StoryCard from "./StoryCard";

interface story {
	user: string;
	profile: string;
	storyImage: string[];
}

export const storyImages: story[] = [
	{
		user: "Mark Zuckerberg",
		profile: window.location.origin + "/images/story/zucc.jpg",
		storyImage: [window.location.origin + "/images/story/zuccbeard.png"],
	},
	{
		user: "Barack Obama",
		profile: window.location.origin + "/images/story/obama.webp",
		storyImage: [window.location.origin + "/images/story/obama.jpg"],
	},
	{
		user: "Kdot",
		profile: window.location.origin + "/images/story/kdot.jpg",
		storyImage: [window.location.origin + "/images/story/pimp.avif"],
	},
	{
		user: "Bayot Boang",
		profile: window.location.origin + "/images/story/spiderbai.png",
		storyImage: [window.location.origin + "/images/story/bayotboang.jpg"],
	},
];

const Story = () => {
	const navigate = useNavigate();

	const handleViewStory = (storyDetails: story) => {
		navigate(`/stories/${storyDetails.user}`, { state: storyDetails });
	};

	return (
		<div className="flex w-[590px] gap-2 pb-6 pt-2 max-w-[590px] overflow-hidden">
			<CreateStoryCard />
			{storyImages.map((story: story) => (
				<StoryCard
					story={{
						user: story.user,
						profile: story.profile,
						storyImage: story.storyImage,
					}}
					key={story.user}
					onView={handleViewStory}
				/>
			))}
		</div>
	);
};

export default Story;
