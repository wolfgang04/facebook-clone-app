import Story from "../components/story/view/Story";
import StoryNavbar from "../components/story/view/storyNavbar";

const ViewStory = () => {
	return (
		<div className="flex">
			<StoryNavbar />
			<Story />
		</div>
	);
};

export default ViewStory;
