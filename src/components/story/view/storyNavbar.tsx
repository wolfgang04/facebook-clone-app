import Close from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import CreateStory from "./CreateStory";
import AllStories from "./AllStories";

const StoryNavbar = () => {
	const navigate = useNavigate();

	return (
		<div className="w-1/4 max-w-[360px] h-screen bg-[#242526] z-50 shrink-0">
			<div className=" pl-5 flex gap-1 items-center py-2 border-b-[1px] border-b-[#2F3031]">
				<div
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#161617] hover:bg-[#2D2E2E]"
					onClick={() => navigate("/")}
				>
					<Close style={{ color: "white" }} />
				</div>
				<button onClick={() => navigate("/")}>
					<img
						src={window.location.origin + "/images/fb-logo.svg"}
						alt="fb-logo"
						className="h-12 w-auto"
					/>
				</button>
			</div>

			<CreateStory />
			<AllStories />
		</div>
	);
};

export default StoryNavbar;
