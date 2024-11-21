import { useNavigate } from "react-router-dom";
import Profile from "../../../../components/Profile";
import Post from "../Posts";
import SearchInput from "../SearchInput";

const Blog = () => {
  const navigate = useNavigate();

  const handlePostOpen = (postId: number) => {
    navigate(`/post/${postId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Profile />
      <SearchInput />

      <Post onPostClick={handlePostOpen} />
    </>
  );
};

export default Blog;
