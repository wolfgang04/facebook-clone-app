import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Close from "@mui/icons-material/Close";
import React from "react";
import PostCommentSection from "./PostCommentSection";
import PostStats from "./PostStats";

interface commentInfo {
	user: string;
	comment: string;
}

interface Props {
	caption?: string;
	imgSrc?: string[];
	user: string;
	comments: commentInfo[];
}

const Post: React.FC<Props> = ({ caption, imgSrc, user, comments }) => {
	const profile = window.location.origin + "/images/user.png";

	return (
		<div className="text-white py-2 bg-[#242526] rounded-lg my-5 overflow-visible">
			<div className="px-4">
				<div className="flex justify-between">
					<div className="flex items-center gap-3">
						<img src={profile} className="h-10 w-10 rounded-full" />
						<div className="">
							<p className="font-semibold text-white">{user}</p>
							<p className="text-sm text-[#B0B3B8]">
								3 hours ago
							</p>
						</div>
					</div>

					<div className="flex items-center gap-5">
						<div className="cursor-pointer flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#303031]">
							<MoreHorizIcon
								style={{ fontSize: "30px", color: "#B0B3B8" }}
							/>
						</div>
						<div className="cursor-pointer flex justify-center items-center h-[40px] w-[40px] rounded-full hover:bg-[#303031]">
							<Close
								style={{ fontSize: "30px", color: "#B0B3B8" }}
							/>
						</div>
					</div>
				</div>

				<div className="py-2 text-lg text-[#e4e6eb]">{caption}</div>
			</div>

			<div className="w-full">
				{imgSrc?.map((img) => (
					<img src={img} alt="" className="w-[200%]" key={img} />
				))}
			</div>

			<div className="px-4">
				<PostStats />
				<PostCommentSection comment={comments} />
			</div>
		</div>
	);
};

export default Post;
