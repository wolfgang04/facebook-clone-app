import React from "react";
import Header from "../components/header/Header";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../components/UserPage/Bio/Button";
import Posts from "../components/UserPage/Routes/Posts";

const UserPage = () => {
	const bgImage = process.env.PUBLIC_URL + "./images/sample-bgImage.png";
	const profileImage = process.env.PUBLIC_URL + "./images/user.png";

	const style = {
		display: "flex",
		height: "60px",
		cursor: "pointer",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "6px",
		paddingLeft: "16px",
		paddingRight: "16px",
	};

	const bgImageStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};

	return (
		<>
			<Header />
			<div className="flex max-h-[580px] w-screen flex-col items-center bg-gradient-to-b from-[#131311] from-10% to-[#242526]">
				<div
					className="min-h-[388px] w-[72%] max-w-6xl cursor-pointer rounded-lg"
					style={bgImageStyle}
				/>

				<div className="w-[68%] max-w-6xl -translate-y-1/4 transform">
					<div className="mb-4 flex items-end gap-4 text-white">
						<img
							src={profileImage}
							alt="profile image"
							className="h-44 w-44 cursor-pointer rounded-full border-4 border-[#242526]"
						/>

						<div className="flex w-full -translate-y-1/3 items-end justify-between">
							<div>
								<p className="text-3xl font-bold">
									Carl Andrew Linao
								</p>
								<p className="pt-1 font-semibold text-[#A2B3B8]">
									69 friends
								</p>
							</div>

							<div className="flex h-9 gap-3 text-white">
								<Button bgColor="bg-[#0866FF] hover:bg-[#2176FF]">
									<AddIcon />
									<p className="font-semibold">
										Add to story
									</p>
								</Button>
								<Button bgColor="bg-[#3A3B3C] hover:bg-[#4E4F50]">
									<EditIcon />
									<p className="font-semibold">
										Edit profile
									</p>
								</Button>
								<Button bgColor="bg-[#3A3B3C] hover:bg-[#4E4F50]">
									<KeyboardArrowDownIcon />
								</Button>
							</div>
						</div>
					</div>

					<div className="flex w-full border-t-[1px] border-[#3E3F41] font-semibold text-[#A2B3B8]">
						<div className="hover:bg-[#3A3B3C]" style={style}>
							Posts
						</div>
						<div className="hover:bg-[#3A3B3C]" style={style}>
							About
						</div>
						<div className="hover:bg-[#3A3B3C]" style={style}>
							Friends
						</div>
						<div className="hover:bg-[#3A3B3C]" style={style}>
							Photos
						</div>
					</div>
				</div>
			</div>

			<section className="flex justify-center bg-[#18191A] pb-20 pt-4">
				<div className="flex w-full max-w-[68%] justify-center">
					<Posts />
				</div>
			</section>
		</>
	);
};

export default UserPage;
