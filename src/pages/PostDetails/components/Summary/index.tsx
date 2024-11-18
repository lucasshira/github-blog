import { useNavigate, useParams } from "react-router-dom";
import IconArrow from "../../../../assets/svg/IconArrow";
import IconBack from "../../../../assets/svg/IconBack";
import {
  SummaryContainer,
  SummaryContent,
  SummaryFooter,
  SummaryHeader,
} from "./styles";
import { useContext } from "react";
import { PostContext } from "../../../../contexts/PostContext";
import IconGithub from "../../../../assets/svg/IconGithub";
import IconCalendar from "../../../../assets/svg/IconCalendar";
import IconComments from "../../../../assets/svg/IconComments";
import { dateFormatter } from "../../../../utils/formatter";

const Summary = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.id === Number(postId));

  const navigate = useNavigate();

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <SummaryContainer>
      <SummaryHeader>
        <span onClick={() => navigate("/")}>
          <IconBack /> Voltar
        </span>
        <a href={post.html_url} target="_blank" rel="noopener noreferrer">
          Ver no Github <IconArrow />
        </a>
      </SummaryHeader>

      <h2>{post.title}</h2>

      <SummaryFooter>
        <span>
          <IconGithub />
          {post.user.login}
        </span>
        <span>
          <IconCalendar />
          {dateFormatter.format(new Date(post.created_at))}
        </span>
        <span>
          <IconComments />
          {post.comments} comentários
        </span>
      </SummaryFooter>

      <SummaryContent>
        <p>{post.body}</p>
      </SummaryContent>
    </SummaryContainer>
  );
};

export default Summary;

{
  /* <h1>{post.title}</h1>
      <h1>{post.user.login}</h1>
      <h1>{post.created_at}</h1>
      <h1>{post.html_url}</h1>
      <h1>{post.body}</h1> */
}
