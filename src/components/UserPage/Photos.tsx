import React from "react";

const Photos = () => {
	return (
		<div className="rounded-md bg-[#242526] px-5 py-4 text-white">
			<div className="flex justify-between">
				<p className="text-xl font-bold">Photos</p>
				<span className="cursor-pointer rounded-md p-1 text-[#569EEF] hover:bg-[#3A3B3C]">
					See all photos
				</span>
			</div>
		</div>
	);
};

export default Photos;
