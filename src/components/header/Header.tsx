import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import { useNavigate } from "react-router";

const Header = () => {
	const navigate = useNavigate();

	const logo = window.location.origin + "/images/fb-logo.svg";
	const profile = window.location.origin + "/images/user.png";

	return (
		<header className="flex h-14 items-center justify-between bg-[#242526] px-3">
			<div className="flex items-center justify-center gap-2">
				<img
					src={logo}
					alt="fb-logo"
					className="cursor-pointer"
					onClick={() => navigate("/")}
				/>
				<input
					type="text"
					placeholder="Search Facebook"
					className="h-10 w-[212px] rounded-full bg-[#3A3B3C] pl-5 text-white outline-none"
				/>
			</div>

			<div className="flex items-center justify-center gap-10">
				<HomeIcon style={{ color: "#1877f2" }} />
				<PeopleOutlineIcon />
				<OndemandVideoIcon />
			</div>

			<div className="flex items-center justify-center gap-2">
				<div className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-full bg-[#3A3B3C]">
					<MapsUgcOutlinedIcon
						style={{ height: "20px", width: "20px" }}
					/>
				</div>

				<div className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-full bg-[#3A3B3C]">
					<NotificationsIcon
						style={{
							height: "20px",
							width: "20px",
							color: "white",
						}}
					/>
				</div>
				<div className="h-10 w-10 cursor-pointer rounded-full bg-[#3A3B3C]">
					<img
						src={profile}
						alt=""
						className="h-10 w-10 rounded-full"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
