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
  padding: 2rem;
  flex-direction: column;
  max-width: 416px;
  cursor: pointer;
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: bold;
    color: ${props => props.theme['white']};
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  p {
    font-size: 0.8rem;
    white-space: nowrap;
  }
`

export const PostBody = styled.div`
  margin-top: 1.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.3;
`;