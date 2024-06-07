import Post from "../Post/Post";
import Sidebar from "./Sidebar";
import Story from "../story/Story";
import Contacts from "./Contacts";

const NewsFeed = () => {
	return (
		<div className="flex justify-center bg-[#18191A]">
			<div className="mt-6 flex w-full justify-between">
				<Sidebar />

				<div className="max-w-[590px]">
					<Story />
					<Post />
				</div>

				<Contacts />
			</div>
		</div>
	);
};

export default NewsFeed;
