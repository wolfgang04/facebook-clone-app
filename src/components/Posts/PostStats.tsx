import ThumbUpIconOutlined from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentIconOutlined from "@mui/icons-material/ModeCommentOutlined";
import ReplyIconOutlined from "@mui/icons-material/ReplyOutlined";
import PostInteraction from "./PostInteraction";

const PostStats = () => {
	const like = window.location.origin + "/images/reactions/like.png";

	return (
		<>
			<div className="py-2 flex text-[#B0B3B8] justify-between">
				<div className="flex items-center gap-1">
					<img src={like} className="h-7" />
					<p className="">58</p>
				</div>

				<div className="flex items-center gap-3">
					<p>1 comment</p>
					<p>5 shares</p>
				</div>
			</div>

			<div className="border-t-[1px] border-t-[#5a5c61] pt-1 text-[#e4e6eb] flex justify-between">
				<PostInteraction Icon={ThumbUpIconOutlined} label="Like" />
				<PostInteraction
					Icon={ModeCommentIconOutlined}
					label="Comment"
				/>
				<PostInteraction Icon={ReplyIconOutlined} label="Share" />
			</div>
		</>
	);
};

export default PostStats;
