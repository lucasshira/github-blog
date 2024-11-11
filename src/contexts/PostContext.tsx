import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: string;
  url: string;
}

interface TransactionContextType {
  posts: Post[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext({} as TransactionContextType);

const BASE_URL = "https://api.github.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async (query = "Boas práticas") => {
    try {
      const response = await api.get(
        `/search/issues?q=${encodeURIComponent(
          query
        )} repo:rocketseat-education/reactjs-github-blog-challenge`
      );
      setPosts(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
