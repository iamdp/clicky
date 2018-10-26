import React from "react";
import "../css/navbar.css";

const Navbar = ({ score, statusText, highScore }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">Clicky Game</li>
        <li className="status-text">{statusText}</li>
        <li className="score">
          Score: {score} | High Score: {highScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
