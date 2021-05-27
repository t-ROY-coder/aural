import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/webapp-light.png";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
            <h3>Aural</h3>
          </div>
        </Link>
        <ul>
          <Link to="/inputImg">
            <li>Image Analysis</li>
          </Link>
          <Link to="/InputGraph">
            <li>Graph Analysis</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Header;
