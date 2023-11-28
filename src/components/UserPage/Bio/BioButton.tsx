import React from "react";

interface Props {
	bioType: React.ReactNode;
}

const BioButton: React.FC<Props> = ({ bioType }) => {
	return (
		<button className="w-full rounded-md bg-[#3A3B3C] py-1 font-medium">
			{bioType}
		</button>
	);
};

export default BioButton;
