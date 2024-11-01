import styled from "styled-components";

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 3rem;
  gap: 2rem;
`

export const PostContent = styled.div`
  background-color: ${props => props.theme['base-profile']};
  border-radius: 10px;
  height: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
`