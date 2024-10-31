import Header from "../../components/Header";
import Profile from "../../components/Profile";
import SearchInput from "./components/SearchInput";
import { BlogContainer } from "./styles";

const Blog = () => {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Profile />
        <SearchInput />
      </BlogContainer>
    </div>
  );
};

export default Blog;
