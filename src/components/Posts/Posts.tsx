import Post from "./Post";
import data from "../../mockupData.json";

const Posts = () => {
	return (
		<>
			{data.map((data) => (
				<Post
					caption={data.caption}
					user={data.user}
					comments={data.comments}
					imgSrc={data.photos}
					key={data.postID}
				/>
			))}
		</>
	);
};

export default Posts;
