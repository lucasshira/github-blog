import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: ${props => props.theme['base-profile']};
  height: 212px;
  border-radius: 10px;
  margin-top: -88px;
  width: 100%;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  grid-template-columns: 148px 1fr;
  gap: 2rem;
`

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  color: ${props => props.theme['blue']};
  font-size: 0.8rem;
  cursor: pointer;

  span, a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme['blue']};
  }
`

export const SummaryFooter = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const SummaryContent = styled.div`
  margin-top: 2.5rem;
`