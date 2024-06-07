import { useNavigate } from "react-router";
import Close from "@mui/icons-material/Close";

const CreateStory = () => {
	const navigate = useNavigate();

	return (
		<div className="pl-5 py-3">
			<h3 className="text-white font-bold text-2xl ">Stories</h3>

			<div className="mt-3 gap-5">
				<h4 className="text-[#E4E6EB] font-medium text-lg">
					Your story
				</h4>

				<div
					className="flex mt-3 items-center gap-3 cursor-pointer"
					onClick={() => navigate("/stories/create")}
				>
					<div className="rounded-full h-[60px] flex justify-center items-center rotate-45 w-[60px] bg-[#3A3B3C]">
						<Close style={{ color: "#5AA7FF", height: "20px" }} />
					</div>
					<div className="">
						<p className="text-white font-medium">Create a story</p>
						<p className="text-[#B0B3B8] text-sm">
							Share a photo or write something.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateStory;
