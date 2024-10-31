import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
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

  input {
    width: 100%;
    border-radius: 6px;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-title']};
    border: 1px solid ${props => props.theme['blue']};
    border-color: ${props => props.theme['base-border']};
    padding-left: 1rem;
    margin-right: 0.8rem;
  }

  button {
    display: flex;
    background-color: ${props => props.theme['blue']};
    border: 0;
    padding: 0.8rem 1rem;
    gap: 0.4rem;
    cursor: pointer;
    border-radius: 6px;
  }
`
