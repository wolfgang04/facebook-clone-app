import React from "react";

interface PROPS {
	image: string;
	name: string;
	numOfMutuals: number;
}

const Friend: React.FC<PROPS> = (props) => {
	return (
		<div className="box-border flex w-[490px] items-center justify-between rounded-md p-3 shadow-md">
			<div className="flex gap-5">
				<img
					src={window.location.origin + props.image}
					alt=""
					className="h-20 w-auto "
				/>

				<div className="flex flex-col justify-center">
					<p className="text-white">{props.name}</p>
					<p className="text-[#A2B3B8]">
						{props.numOfMutuals} mutual friends
					</p>
				</div>
			</div>
		</div>
	);
};

export default Friend;
