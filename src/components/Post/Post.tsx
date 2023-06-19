import React from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

const Post = () => {
	const profile = process.env.PUBLIC_URL + "/images/user.png";
	const video = process.env.PUBLIC_URL + "images/video-camera.png";
	const image = process.env.PUBLIC_URL + "images/image.png";

	return (
		<div className="w-[590px] rounded-lg bg-[#242526] p-5 pb-1">
			<div className="flex gap-2 pb-3">
				<img
					alt=""
					src={profile}
					className="h-10 w-auto rounded-full"
				/>

				<div
					className="w-full rounded-full bg-[#3A3B3C] px-3 py-2 hover:bg-[#4E4F50]"
					role="button"
				>
					<p className="text-md text-[#B0B3B8]">
						What's on your mind, [username]?
					</p>
				</div>
			</div>

			<div className="flex justify-center gap-5 border-t-[1px] border-[#B0B3B8] py-3">
				<div className="flex h-10 w-40 items-center justify-center gap-1 rounded-md py-5 text-[#B0B3B8] hover:bg-[#4E4F50]">
					<img src={video} className="h-8 w-auto" />
					<p>Live Video</p>
				</div>

				<div className="flex h-10 w-40 items-center justify-center gap-1 rounded-md py-5 text-[#B0B3B8] hover:bg-[#4E4F50]">
					<img src={image} className="h-8 w-auto" />
					<p>Photo/video</p>
				</div>

				<div className="flex h-10 w-40 items-center justify-center gap-1 rounded-md py-5 text-[#B0B3B8] hover:bg-[#4E4F50]">
					<EmojiEmotionsOutlinedIcon
						style={{ height: "32px", width: "auto" }}
					/>
					<p>Feeling/activity</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
