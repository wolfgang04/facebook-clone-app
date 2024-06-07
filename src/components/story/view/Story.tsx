import { storyImages as users } from "../Story";
import { Route, Routes, useNavigate } from "react-router";
import CurrentViewed from "./CurrentViewed";

const Story = () => {
	const navigate = useNavigate();

	const handleNextStory = (curr: string, direction: number) => {
		const currIdx = users.findIndex((user) => user.user === curr);
		const nextIdx =
			currIdx + direction < 0
				? users.length - 1
				: (currIdx + direction) % users.length;
		const nextStory = users[nextIdx].user;
		navigate(`${nextStory}`, { state: users[nextIdx] });
	};

	return (
		<Routes>
			{users.map((user) => (
				<Route
					path={`/${user.user}`}
					key={user.user}
					element={<CurrentViewed onNext={handleNextStory} />}
				/>
			))}
		</Routes>
	);
};

export default Story;
