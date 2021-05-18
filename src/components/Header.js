import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/my-app-logo.png";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
          <h3>My-App</h3>
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
