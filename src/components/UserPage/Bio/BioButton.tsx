import React from "react";

interface Props {
	bioType: React.ReactNode;
}

const BioButton: React.FC<Props> = ({ bioType }) => {
	return (
		<button className="w-full rounded-md bg-[#3A3B3C] py-1 font-medium hover:bg-[#4E4F50]">
			{bioType}
		</button>
	);
};

export default BioButton;
