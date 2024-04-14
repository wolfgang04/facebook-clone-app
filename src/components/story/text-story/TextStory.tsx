import React from "react";

interface Props {
	text: string;
}

const TextStory: React.FC<Props> = (props) => {
	return (
		<div className="h-full w-[80%] rounded-lg bg-[#242526] px-3 py-3">
			<div className="pb-4 font-medium text-white">Preview</div>

			<div className="relative flex h-[93%] w-full items-center justify-center rounded-lg bg-[#18191A]">
				<div className="flex h-[95%] w-1/3 items-center justify-center rounded-lg bg-gradient-to-br from-[#4E90F9] from-10% to-[#074AB5] p-10 text-2xl text-white">
					{props.text === "" ? "Start typing" : props.text}
				</div>
			</div>
		</div>
	);
};

export default TextStory;
