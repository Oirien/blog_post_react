import { useState } from "react";
import Header from "../Components/Header";
import PostForm from "../Components/PostForm";
import PostList from "../Components/PostList";

function PostContainer() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "What is a function?",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus autem fuga sapiente nulla aut natus"
		}
	]);

	return (
		<>
			<Header />
			<section className="container feed">
				<PostForm setPosts={setPosts} posts={posts} />
				<PostList posts={posts} />
			</section>
		</>
	);
}

export default PostContainer;
