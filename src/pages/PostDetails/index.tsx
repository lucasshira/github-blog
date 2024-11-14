import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Profile from "../../components/Profile";

const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <Profile />
    </div>
  );
};

export default PostDetails;

{
  /* <h1>{post.title}</h1>
      <h1>{post.user.login}</h1>
      <h1>{post.created_at}</h1>
      <h1>{post.html_url}</h1>
      <h1>{post.body}</h1> */
}
