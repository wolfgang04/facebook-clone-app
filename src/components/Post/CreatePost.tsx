import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PublicIcon from "@mui/icons-material/Public";
import PostAttachments from "./PostAttachments";

interface Props {
	onClose: () => void;
}

const CreatePost: React.FC<Props> = (props) => {
	const [inputText, setInputText] = useState("");

	const profile = window.location.origin + "/images/user.png";

	const buttonDiabledStyle =
		"disabled:bg-[#505151] disabled:cursor-not-allowed";

	const handleEnablePostButton = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	return (
		<div className="relative flex items-center justify-center">
			<div
				className="fixed left-0 top-0 z-10 h-full w-full bg-[#0E0E0E] opacity-90"
				onClick={props.onClose}
			/>

			<div className="fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] rounded-md bg-[#242526]">
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
								<PostAttachments />
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
