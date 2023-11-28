import React from "react";

interface Props {
	user: string;
}

const StoryCard: React.FC<Props> = (props) => {
	return (
		<div className="h-[250px] w-36 cursor-pointer rounded-lg bg-white p-1 hover:opacity-80">
			<p>{props.user}</p>
		</div>
	);
};

export default StoryCard;
