import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Contact from "./contacts/Contact";

const Contacts = () => {
	return (
		<div className="w-[360px]">
			<div className="flex items-center justify-between px-2 pb-4 pr-2 text-lg font-medium text-[#B0B3BB]">
				<p>Contacts</p>

				<div className="flex gap-3">
					<SearchIcon />
					<MoreHorizIcon />
				</div>
			</div>

			<div className="flex flex-col">
				<Contact name="Benedict Avenido" />
				<Contact name="Jade Bayot Boang" />
				<Contact name="Tyler De Leon" />
				<Contact name="Jake Anunciado" />
			</div>
		</div>
	);
};

export default Contacts;
