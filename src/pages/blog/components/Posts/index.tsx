import { useContext } from "react";
import { PostBody, PostContainer, PostContent, PostHeader } from "./styles";
import { PostContext } from "../../../../contexts/PostContext";
import { dateFormatter } from "../../../../utils/formatter";

export interface Post {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

interface PostsProps {
  onPostClick: (postId: number) => void;
}

const Post = ({ onPostClick }: PostsProps): JSX.Element => {
  const { posts } = useContext(PostContext);
  const hasPosts = posts && posts.length > 0;

  return (
    <PostContainer>
      {hasPosts ? (
        <>
          {posts.map((post: Post) => {
            return (
              <PostContent key={post.id} onClick={() => onPostClick(post.id)}>
                <PostHeader>
                  <span>{post.title}</span>
                  <p>{dateFormatter.format(new Date(post.created_at))}</p>
                </PostHeader>
                <PostBody>{post.body}</PostBody>
              </PostContent>
            );
          })}
        </>
      ) : (
        <div style={{ textWrap: "nowrap" }}>
          <h2>Nenhum post encontrado com o filtro de busca.</h2>
        </div>
      )}
    </PostContainer>
  );
};

export default Post;
