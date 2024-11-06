import { PostBody, PostContainer, PostContent, PostHeader } from "./styles";

interface PostProps {
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: string;
  url: string;
}

const Post = ({ title, body }: PostProps) => {
  return (
    <PostContainer>
      <PostContent>
        <PostHeader>
          <span>JavaScript data types and data structures</span>
          <p>Ha 1 dia</p>
        </PostHeader>
        <PostBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          illo dignissimos, cupiditate earum necessitatibus eos, quas nam, illo
          dignissimos, cupiditate earum necessitatibus eos, quas nam.
        </PostBody>
      </PostContent>
      <PostContent>Texto</PostContent>
      <PostContent>Texto</PostContent>
      <PostContent>Texto</PostContent>
      <PostContent>Texto</PostContent>
      <PostContent>Texto</PostContent>
    </PostContainer>
  );
};

export default Post;
