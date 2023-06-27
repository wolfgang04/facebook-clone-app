import React from "react";

interface Props {
	itemImg?: string;
	itemName: string;
	children?: React.ReactElement;
}

const SidebarItem: React.FC<Props> = ({ itemImg, itemName, children }) => {
	return (
		<div className="flex items-center px-2">
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
