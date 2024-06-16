import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import React from "react";

interface commentInfo {
	user: string;
	comment: string;
}

interface Props {
	comment: commentInfo[];
}

const PostCommentSection: React.FC<Props> = ({ comment }) => {
	return (
		<div className="border-t-[1px] border-t-[#5a5c61] pt-2 mt-1">
			<div className="flex gap-3 flex-col">
				{comment.map((comment, idx) => (
					<div className="flex gap-2" key={comment.user + idx}>
						<img
							src={window.location.origin + "/images/user.png"}
							className="h-8 rounded-full"
							alt=""
						/>
						<div>
							<div className="bg-[#3A3B3C] rounded-2xl p-2">
								<p className="text-xs font-medium">
									{comment.user}
								</p>
								<p className="pr-1">{comment.comment}</p>
							</div>

							<div className="flex gap-2 text-xs font-bold text-[#B0B3B8] pl-2">
								<p className="hover:underline cursor-pointer">
									Like
								</p>
								<p className="hover:underline cursor-pointer">
									Reply
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex mt-4 gap-2 items-center">
				<img
					src={window.location.origin + "/images/user.png"}
					className="h-8 rounded-full"
					alt=""
				/>

				<div className="bg-[#3A3B3C] w-full px-3 rounded-3xl flex">
					<input
						type="text"
						className="bg-inherit w-full rounded-2xl py-2 focus:outline-none"
						placeholder="Write a comment..."
					/>
					<div className="flex items-center gap-3 flex-grow">
						<SentimentSatisfiedAltIcon
							style={{
								color: "#e4e6eb",
								strokeWidth: "1px",
								cursor: "pointer",
							}}
						/>
						<CameraAltOutlinedIcon
							style={{
								color: "#e4e6eb",
								strokeWidth: "1px",
								cursor: "pointer",
							}}
						/>
						<GifBoxOutlinedIcon
							style={{
								color: "#e4e6eb",
								strokeWidth: "1px",
								cursor: "pointer",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCommentSection;
