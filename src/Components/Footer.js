import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";

function Footer(props) {
  const navigate = useNavigate();

  return (
    <div className="footer">
      {/* Add New Recipe button */}
      <button className="new-recipe-button" onClick={() => navigate("/create")}>
        Add New Recipe
      </button>

      {/* Logout button */}
      <button
        onClick={async () => {
          await fetch(`${baseUrl}/logout`);
          localStorage.removeItem("loggedIn");
          navigate("/");
        }}
      >
        Logout
      </button>

      {/*  Delete Recipe Button */}
      <button
        className="delete-recipe-button"
        onClick={() => navigate("/dashboard")}
      >
        Delete Recipe
      </button>

      {/*  Delete Account Button */}
      <button className="delete-account-button" onClick={() => navigate("/")}>
        Delete Account
      </button>

      {/*  Edit Recipe Button */}
      <button
        className="edit-recipe-button"
        onClick={() => navigate("/update/:id")}
      >
        Edit Recipe
      </button>
    </div>
  );
}

export default Footer;
