import React from "react";
import BioButton from "./Bio/BioButton";

const Bio = () => {
	return (
		<div className="flex flex-col gap-5 rounded-md bg-[#242526] px-5 py-4 text-white">
			<p className="text-xl font-bold">Intro</p>
			<BioButton bioType="Add bio" />
			<BioButton bioType="Add details" />
			<BioButton bioType="Add hobbies" />
			<BioButton bioType="Add featured" />
		</div>
	);
};

export default Bio;
