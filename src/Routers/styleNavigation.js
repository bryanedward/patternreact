import styled from "styled-components";

export const FullScreen = styled.div`
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  color: white;
  background-color: #282c34;
`;

export const NavBar = styled.div`
  padding: 1rem;
  background-color: #20252e;
  & li {
    list-style-type: none;
    padding: 1rem 0;
    & a {
      color: white;
      text-decoration: none;
    }
  }
`;
