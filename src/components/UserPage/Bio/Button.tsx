import React from "react";

interface Props {
	bgColor: string;
	children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
	return (
		<button
			className={`flex cursor-pointer items-center justify-between gap-1 rounded-md px-2 py-1 ${props.bgColor}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
