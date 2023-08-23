import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div className="header">
      <a
        href="/dashboard"
        style={{
          color: "black",
          textDecoration: "none",
          fontFamily: "'Bricolage Grotesque', 'GFS Neohellenic', sans-serif",
        }}
      >
        Taste Tally
      </a>
    </div>
  );
}

export default Header;
