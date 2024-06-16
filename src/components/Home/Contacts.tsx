import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Contact from "./contacts/Contact";
import { storyImages as users } from "../story/Story";

const Contacts = () => {
	return (
		<div className="w-[360px]">
			<div className="flex items-center justify-between px-2 pb-4 pr-2 text-lg font-medium text-[#B0B3BB]">
				<p>Contacts</p>

				<div className="flex gap-3">
					<SearchIcon />
					<MoreHorizIcon />
				</div>
			</div>

			<div className="flex flex-col">
				{users.map((user) => (
					<Contact
						name={user.user}
						profile={user.profile}
						key={user.user}
					/>
				))}
			</div>
		</div>
	);
};

export default Contacts;
