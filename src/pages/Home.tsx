import React from "react";
import Header from "../components/Home/header/Header";
import NewsFeed from "../components/Home/NewsFeed";

const Home = () => {
	return (
		<div className="h-screen bg-[#18191A]">
			<Header />
			<NewsFeed />
		</div>
	);
};

export default Home;
