import React from "react";
import { useNavigate, useParams } from "react-router";

interface Props {
	itemImg?: string;
	itemName: string;
	children?: React.ReactElement;
	id: string;
}

const SidebarItem: React.FC<Props> = ({ itemImg, itemName, children, id }) => {
	const navigate = useNavigate();
	const { username } = useParams();

	const handleClick = () => {
		navigate(`/${id}`);
		console.log(username);
	};

	return (
		<div
			className="flex cursor-pointer items-center rounded-md px-2 py-1 hover:bg-[#303031]"
			onClick={handleClick}
		>
			<div className="flex h-11 w-14 items-center">
				{itemImg && (
					<img
						src={itemImg}
						alt=""
						className="h-9 w-9 rounded-full"
					/>
				)}
				{children}
			</div>
			<p className="w-full text-[15px] font-bold text-white">
				{itemName}
			</p>
		</div>
	);
};

export default SidebarItem;
