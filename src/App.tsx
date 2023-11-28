import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateStory from "./pages/CreateStory";
import UserPage from "./pages/UserPage";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					isLoggedIn ? <Home /> : <Login setLogin={handleLogin} />
				}
			/>
			<Route path="/stories/create" element={<CreateStory />} />
			<Route path="/username" element={<UserPage />} />
		</Routes>
	);
}

export default App;
