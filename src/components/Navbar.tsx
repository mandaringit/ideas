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
        <li>
          <Link to='/countdowntimer'>CountdownTimer</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  height: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 1rem;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  li {
    background-color: #f37a48;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-radius: 5px;
  }

  /* li + li {
    margin-left: 1rem;
  } */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
