import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Home from "./pages/blog";
import PostProvider from "./contexts/PostContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <PostProvider>
        <Home />
      </PostProvider>
    </ThemeProvider>
  );
}

export default App;
