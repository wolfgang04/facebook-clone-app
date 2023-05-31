import React from "react";

interface Props {
	type: string;
	w: string;
	name: string;
	onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedGender: string;
}

const GenderField: React.FC<Props> = (props) => {
	const { type, w, name, onSelect, selectedGender } = props;

	return (
		<div
			className={`flex w-[${w}] h-9 shrink-0  items-center rounded-md border-2`}
		>
			<label className=" pl-[10px] pr-[28px] " htmlFor={type}>
				{type}
			</label>
			<input
				type="radio"
				name={name}
				value={type}
				id={type}
				checked={selectedGender === type}
				onChange={onSelect}
				className="-translate-x-2"
			/>
		</div>
	);
};

export default GenderField;
