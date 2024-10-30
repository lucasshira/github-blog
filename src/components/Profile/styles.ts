import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: ${props => props.theme['base-border']};
  max-width: 864px;
  height: 212px;
  border-radius: 10px;
  margin-top: -88px;
  padding: 2rem 2.5rem;

  display: grid;
  grid-template-columns: 148px 1fr;
  align-items: center;
  gap: 1.5rem;

  p {
    margin-top: 0.5rem;
  }
`

export const ProfileInfo = styled.div`
  gap: 1.5rem;
`

export const ProfileImg = styled.img`
  width: 100%;
  max-width: 148px;
  height: auto;
  justify-content: center;
  object-fit: cover;
  border-radius: 8px;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    color: ${props => props.theme['base-title']};
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme['blue']};
  }
`

export const ProfileFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`