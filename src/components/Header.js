import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h3>My-App</h3>
        </Link>
        <ul>
          <li>Image Analysis</li>
          <li>Graph Analysis</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
