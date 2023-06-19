import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

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
		</Routes>
	);
}

export default App;
