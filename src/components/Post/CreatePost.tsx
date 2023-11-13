import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface Props {
	onClose: () => void;
}

const CreatePost: React.FC<Props> = (props) => {
	const [inputText, setInputText] = useState("");

	const profile = process.env.PUBLIC_URL + "/images/user.png";
	const image = process.env.PUBLIC_URL + "images/image.png";

	const buttonDiabledStyle =
		"disabled:bg-[#505151] disabled:cursor-not-allowed";

	const handleEnablePostButton = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
		console.log(inputText);
	};

	return (
		<div className="relative flex items-center justify-center">
			<div
				className="fixed left-0 top-0 z-10 h-full w-full bg-[#0E0E0E] opacity-90"
				onClick={props.onClose}
			/>

			<div className="fixed z-50 w-[500px] rounded-md bg-[#242526]">
				<div className="flex h-[60px] items-center justify-center border-b-[1px] border-[#3E4042]">
					<p className="text-xl font-bold text-white">Create Post</p>
				</div>

				<div className="flex flex-col items-end px-4">
					<div className="w-full">
						<div className="flex gap-2 py-4">
							<img
								src={profile}
								alt=""
								className="h-10 rounded-full"
							/>

							<div className="h-10">
								<p className="text-sm font-bold text-white">
									Tiburcio Decidido
								</p>
								<div className="flex max-w-[85px] cursor-pointer items-center justify-center gap-1 rounded-md bg-[#3A3B3C] px-3 text-sm text-white">
									<PublicIcon
										style={{
											height: "15px",
											width: "15px",
											marginLeft: "5px",
										}}
									/>
									<p className="text-xs">Public</p>
									<ArrowDropDownIcon />
								</div>
							</div>
						</div>

						<input
							type="text"
							placeholder="What's on your mind, Tiburcio Decidido?"
							className="mb-20 w-full bg-inherit text-2xl text-white placeholder-[#B0B3B8] outline-none"
							autoFocus
							onChange={handleEnablePostButton}
						/>
					</div>

					<div className="w-full py-4">
						<div className="mb-5 flex h-14 items-center justify-between rounded-md border-[1px] border-[#3E4042] p-2">
							<p className="px-2 font-bold text-white">
								Add to your post
							</p>

							<div className="flex items-center justify-center">
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<img
										src={image}
										alt=""
										className="h-8 w-8"
									/>
								</div>
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<PersonIcon
										style={{
											color: "#2374E1",
											height: "32px",
											width: "32px",
										}}
									/>
								</div>
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<EmojiEmotionsOutlinedIcon
										style={{
											color: "#F7B928",
											height: "32px",
											width: "32px",
										}}
									/>
								</div>
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<LocationOnIcon
										style={{
											color: "red",
											height: "32px",
											width: "32px",
										}}
									/>
								</div>
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<FlagIcon
										style={{
											color: "#0399E1",
											height: "32px",
											width: "32px",
										}}
									/>
								</div>
								<div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C]">
									<MoreHorizIcon
										style={{
											color: "#606770",
											height: "32px",
											width: "32px",
										}}
									/>
								</div>
							</div>
						</div>

						<button
							className={`h-9 w-full rounded-md bg-[#2374E1] px-3 hover:bg-[#3982E4] ${
								inputText.trim().length === 0
									? buttonDiabledStyle
									: ""
							}`}
							disabled={inputText.trim().length === 0}
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
