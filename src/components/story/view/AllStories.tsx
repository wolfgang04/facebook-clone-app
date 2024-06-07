import { storyImages as stories } from "../Story";
import StoryUser from "./StoryUser";
import { NavLink } from "react-router-dom";

const AllStories = () => {
	return (
		<div className="mt-2">
			<h3 className="text-[#E4E6EB] font-medium text-lg pl-5">
				All stories
			</h3>

			{stories.map((story) => (
				<NavLink
					to={`${story.user}`}
					state={story}
					className={({ isActive }) =>
						isActive ? "bg-[#3A3B3C]" : ""
					}
					key={story.user}
				>
					<StoryUser
						profile={story.profile}
						storyImage={story.storyImage}
						user={story.user}
					/>
				</NavLink>
			))}
		</div>
	);
};

export default AllStories;
