import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostDetails;
