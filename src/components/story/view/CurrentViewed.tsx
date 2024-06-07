import React, { useState } from "react";
import { useLocation } from "react-router";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowIcon from "@mui/icons-material/ArrowBackIosNewRounded";

interface Props {
	onNext: (curr: string, dir: number) => void;
}

const CurrentViewed: React.FC<Props> = (props) => {
	const [isPlaying, setIsPlaying] = useState(true);
	const location = useLocation();
	const { profile, storyImage, user } = location.state;
	const curr = decodeURIComponent(location.pathname.slice(9));

	const storyImg = {
		backgroundImage: `url(${storyImage[0]})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};

	return (
		<div className="bg-black w-full z-30 flex justify-evenly items-center">
			<div
				className="bg-[#242526] h-14 w-14 flex justify-center items-center rounded-full cursor-pointer"
				onClick={() => props.onNext(curr, -1)}
			>
				<ArrowIcon style={{ color: "#B0B3B8" }} />
			</div>

			<div
				className="w-[30%] h-[90%] rounded-lg bg-[#242526] p-4 flex justify-between"
				style={storyImg}
			>
				{/* <div className="story-counter"></div> */}

				<div className="flex justify-between w-full h-10">
					<div className="flex gap-3 h-10 items-center">
						<img
							src={profile}
							className="rounded-full h-10 w-10"
							alt=""
						/>
						<p className="text-white">{user}</p>
					</div>

					<div className="flex items-center ">
						{isPlaying ? (
							<div onClick={() => setIsPlaying(false)}>
								<PlayArrowRoundedIcon
									style={{
										height: "30px",
										cursor: "pointer",
										color: "white",
									}}
								/>
							</div>
						) : (
							<div onClick={() => setIsPlaying(true)}>
								<PauseRoundedIcon
									style={{
										height: "30px",
										cursor: "pointer",
										color: "white",
									}}
								/>
							</div>
						)}

						<MoreHorizIcon
							style={{
								height: "30px",
								cursor: "pointer",
								color: "white",
							}}
						/>
					</div>
				</div>
			</div>

			<div
				className="bg-[#242526] h-14 w-14 flex justify-center items-center rounded-full cursor-pointer"
				onClick={() => props.onNext(curr, 1)}
			>
				<ArrowIcon
					style={{ color: "#B0B3B8", transform: "rotate(180deg)" }}
				/>
			</div>
		</div>
	);
};

export default CurrentViewed;
