import Header from "../../components/Header";
import Profile from "../../components/Profile";
import { BlogContainer } from "./styles";

const Blog = () => {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Profile />
      </BlogContainer>
    </div>
  );
};

export default Blog;
