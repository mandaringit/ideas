import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/bin2dec'>BIN2DEC</Link>
        </li>
        <li>
          <Link to='/border-radius'>BorderRadiusPreviewr</Link>
        </li>
        <li>
          <Link to='/calculator'>Calculator</Link>
        </li>
        <li>
          <Link to='/christmaslights'>ChristmasLights</Link>
        </li>
        <li>
          <Link to='/causeeffect'>CauseEffect</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  background-color: black;
  height: 4rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  ul {
    list-style-type: none;
    display: flex;
  }

  li + li {
    margin-left: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
