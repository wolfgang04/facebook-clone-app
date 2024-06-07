import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TextStorySideBar from "../components/story/text-story/TextStorySideBar";
import TextStory from "../components/story/text-story/TextStory";

const CreateStory = () => {
	const [createText, setCreateText] = useState<boolean>(false);
	const [text, setText] = useState<string>("");

	const logo = window.location.origin + "/images/fb-logo.svg";
	const profile = window.location.origin + "/images/user.png";
	const image = window.location.origin + "/images/image.png";
	const Aa = window.location.origin + "/images/Aa.png";

	const navigate = useNavigate();

	const handleCreateText = () => {
		setCreateText(true);
	};

	const handleTextChange = (text: string) => {
		setText(text);
	};

	const handleDiscardText = () => {
		setCreateText(false);
	};

	return (
		<div className="flex h-screen">
			{/* SIDEBAR */}
			<div className="h-full w-1/3 max-w-[360px] bg-[#242526] px-3">
				<div className="flex items-center gap-2 py-[10px] shadow-md">
					<div
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#161617] hover:bg-[#2D2E2E]"
						onClick={() => navigate(-1)}
					>
						<CloseIcon style={{ color: "white" }} />
					</div>

					<button onClick={() => navigate("/")}>
						<img src={logo} alt="fb-logo" />
					</button>
				</div>

				<div className="flex flex-col border-b-[1px] border-b-[#2F3031] pt-5">
					<div className="flex w-full justify-between">
						<h1 className="text-2xl font-bold text-white">
							Your story
						</h1>

						<button className="h-10 w-10 rounded-full bg-[#3A3B3C]">
							<SettingsIcon style={{ color: "white" }} />
						</button>
					</div>

					<div className="flex items-center gap-2 py-5">
						<img
							src={profile}
							alt=""
							className="h-14 w-auto rounded-full"
						/>
						<p className="font-bold text-white">
							Carl Andrew Linao
						</p>
					</div>
				</div>

				{createText && (
					<TextStorySideBar
						onDiscard={handleDiscardText}
						text={text}
						setText={handleTextChange}
					/>
				)}
			</div>

			{/* CONTENT */}
			<div className="w-full bg-[#18191A]">
				<div className="flex items-center justify-end gap-2 px-3 py-2">
					<div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#3A3B3C]">
						<MapsUgcOutlinedIcon
							style={{
								height: "20px",
								width: "20px",
							}}
						/>
					</div>

					<div className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-full bg-[#3A3B3C]">
						<NotificationsNoneOutlinedIcon
							style={{
								height: "20px",
								width: "20px",
							}}
						/>
					</div>
					<div className="h-10 w-10 cursor-pointer rounded-full bg-[#3A3B3C]">
						<img src={profile} alt="" className="rounded-full" />
					</div>
				</div>

				{/* CREATE STORY */}
				<div className="flex h-[85%] w-full items-center justify-center">
					{createText && <TextStory text={text} />}

					{!createText && (
						<div className="flex gap-3">
							{/* PHOTO STORY */}
							<div className="flex h-[360px] w-[220px] cursor-pointer flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#6A6EEC] from-10% to-[#8BD9FF]">
								<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#242526]">
									<img
										src={image}
										alt="img"
										className="h-10 w-10"
									/>
								</div>
								<p className="text-xs font-bold text-white">
									Create a photo story
								</p>
							</div>

							{/* TEXT STORY */}
							<div
								className="flex h-[360px] w-[220px] cursor-pointer flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#AB56C9] from-20% to-[#E25286]"
								onClick={handleCreateText}
							>
								<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#242526]">
									<img
										src={Aa}
										alt="img"
										className="h-6 w-6"
									/>
								</div>
								<p className="text-xs font-bold text-white">
									Create a text story
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CreateStory;
