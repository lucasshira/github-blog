import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 864px;
  margin-top: 4.5rem;
`

export const SearchInputContainer = styled.div`
  display: flex;
  border-radius: 6px;

  h2 {
    color: ${props => props.theme['base-title']};
    font-weight: 400;
    font-size: 1.2rem;
  }
`
