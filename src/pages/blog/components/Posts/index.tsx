import { useContext } from "react";
import { PostBody, PostContainer, PostContent, PostHeader } from "./styles";
import { PostContext } from "../../../../contexts/PostContext";
import { dateFormatter } from "../../../../utils/formatter";

interface Post {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

const Post = (): JSX.Element => {
  const { posts } = useContext(PostContext);

  return (
    <PostContainer>
      {posts.map((post: Post) => {
        return (
          <PostContent key={post.id}>
            <PostHeader>
              <span>{post.title}</span>
              <p>{dateFormatter.format(new Date(post.created_at))}</p>
            </PostHeader>
            <PostBody>{post.body}</PostBody>
          </PostContent>
        );
      })}
    </PostContainer>
  );
};

export default Post;
