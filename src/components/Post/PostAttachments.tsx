import PostAttachment from "./PostAttachment";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import FlagIcon from "@mui/icons-material/Flag";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import classes from "./PostAttachment.module.css";

const PostAttachments = () => {
	const image = window.location.origin + "/images/image.png";

	return (
		<>
			<div
				className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#3A3B3C] ${classes.tooltip}`}
			>
				<img src={image} alt="" className="h-8 w-8" />
				<span className={classes.tooltiptext}>Photo/video</span>
			</div>
			<PostAttachment
				Icon={PersonIcon}
				label="Tag people"
				style={{ color: "#2374E1" }}
			/>
			<PostAttachment
				Icon={EmojiEmotionsOutlinedIcon}
				label="Feeling/activity"
				style={{ color: "#F7B928" }}
			/>
			<PostAttachment
				Icon={LocationOnIcon}
				label="Check in"
				style={{ color: "red" }}
			/>
			<PostAttachment
				Icon={FlagIcon}
				label="Life event"
				style={{ color: "#0399E1" }}
			/>
			<PostAttachment
				Icon={MoreHorizIcon}
				label="More"
				style={{ color: "#606770" }}
			/>
		</>
	);
};

export default PostAttachments;
