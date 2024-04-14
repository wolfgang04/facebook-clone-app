import React from "react";

interface Props {
	onDiscard: () => void;
	setText: (text: string) => void;
	text: string;
}

const TextStorySideBar: React.FC<Props> = (props) => {
	const handleDiscardText = () => {
		props.onDiscard();
	};

	const handleSetText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.target!.value;

		props.setText(text);
	};

	return (
		<div className="flex flex-col gap-5 pt-[10px]">
			<div
				className="h-[231px] w-full rounded-md border-[1px] border-[#404142] p-5 hover:border-[#88898b]"
				onClick={() => document.getElementById("text-box")!.focus()}
			>
				<textarea
					value={props.text}
					onChange={handleSetText}
					id="text-box"
					placeholder="Start typing"
					className="h-full w-full resize-none bg-transparent text-white outline-none"
				/>
			</div>

			<div className="flex gap-2">
				<button
					className="h-[40px] w-[170px] rounded-lg bg-[#3A3B3C] text-white hover:bg-[#4E4F50]"
					onClick={handleDiscardText}
				>
					Discard
				</button>
				<button className="h-[40px] w-[229px] rounded-lg bg-[#0866FF] text-white hover:bg-[#2176FF]">
					Share to story
				</button>
			</div>
		</div>
	);
};

export default TextStorySideBar;
