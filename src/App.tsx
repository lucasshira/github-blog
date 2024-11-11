import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Blog from "./pages/blog";
import PostProvider from "./contexts/PostContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <PostProvider>
        <Blog />
      </PostProvider>
    </ThemeProvider>
  );
}

export default App;
