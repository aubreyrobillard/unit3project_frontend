import React from "react";
import { useNavigate, Link, useLoaderData, Form } from "react-router-dom";
import baseUrl from "../baseUrl";
import StarRating from "../Components/StarRating";
import Header from "../Components/Header";

function Index(props) {
  const allRecipes = useLoaderData();
  const navigate = useNavigate();

  return (
  <div className="index-page-container">
    {<Header />}
        {/* Main Content */}
    <div className="index-content">
      <h1 className="title-Index-pg">Recipes</h1>
      <div className="recipe-item-grid">
        
        {allRecipes.map((recipe, index) => {
        return (
        <div key={recipe._id} className="recipe-item">
          <Link to={`/${recipe._id}`}>
          <h1><span className="recipe-ItemName">{recipe.name}</span></h1>
          </Link>
        </div>
        );
        })}
        </div>
   

    </div>
    {/*/////////////////////////////////////////////////BUTTON////////////////////////////////////////////// */}

          {/* Footer */}
    <div className="index-footerAllbutton" >
          {/* Add New Recipe Button */}  
      <button className="new-recipe-button"
      onClick={() => navigate("/create")}>Add New Recipe</button>

          {/* Logout button */}
      <button className="logout-button"
      onClick={async () => {await fetch(`${baseUrl}/logout`);
      localStorage.removeItem("loggedIn");navigate("/");}}> Logout</button>

          {/* Delete Account Button */}
      <button className="delete-account-button"
      onClick={() => navigate("/")}>Delete Account</button>        
    </div>      
  </div>
  );
}

export default Index;
