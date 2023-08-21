function Post({ post }) {
	return (
		<li key={post.id} className="post">
			<h3>{post.title}</h3>
			<p>{post.description}</p>
		</li>
	);
}

export default Post;
