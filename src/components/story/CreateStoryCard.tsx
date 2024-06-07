import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

const CreateStoryCard = () => {
	const profile = window.location.origin + "/images/user.png";

	const navigate = useNavigate();

	const handleCreateStory = () => {
		navigate("/stories/create");
	};

	return (
		<div
			className="relative h-[250px] shrink-0 w-36 cursor-pointer rounded-lg bg-white hover:opacity-80"
			onClick={handleCreateStory}
		>
			<img
				src={profile}
				alt="user-profile"
				className="object h-[250px] w-auto rounded-lg object-cover"
			/>
			<div className="absolute bottom-0 flex h-12 w-36 flex-col items-center justify-center rounded-b-md bg-[#242526] text-white">
				<div className="flex -translate-y-4 flex-col items-center justify-center">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#242526] bg-[#2E89FF]">
						<AddIcon style={{ color: "white" }} />
					</div>
					<p className="text-xs">Create story</p>
				</div>
			</div>
		</div>
	);
};

export default CreateStoryCard;
