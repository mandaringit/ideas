import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

export default Navbar;
