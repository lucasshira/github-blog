import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Post from "./components/Posts";
import SearchInput from "./components/SearchInput";
import { BlogContainer } from "./styles";

const Blog = () => {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Profile />
        <SearchInput />

        <Post />
      </BlogContainer>
    </div>
  );
};

export default Blog;
