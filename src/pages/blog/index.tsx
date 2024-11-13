import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { BlogContainer } from "./styles";

const Home = () => {
  return (
    <div>
      <Header />

      <BlogContainer>
        <Outlet />
      </BlogContainer>
    </div>
  );
};

export default Home;
