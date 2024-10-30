import styled from "styled-components";

export const LogoContainer = styled.div`
  color: ${props => props.theme['blue']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  span {
    text-transform: uppercase;
    color: ${props => props.theme['blue']};
    line-height: 1.6;
    font-size: 1.5rem;
  }
`