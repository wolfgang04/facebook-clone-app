import React from "react";

interface Props {
	name: string;
}

const Contact: React.FC<Props> = (props) => {
	const profile = process.env.PUBLIC_URL + "/images/user.png";

	return (
		<div className="flex items-center gap-3 text-white">
			<div className="h-9 w-9 ">
				<img
					src={profile}
					alt="user-profile"
					className="h-9 w-9 rounded-full"
				/>
			</div>

			<p>{props.name}</p>
		</div>
	);
};

export default Contact;
