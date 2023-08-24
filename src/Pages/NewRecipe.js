import { Form, useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";
import Header from "../Components/Header";
import React from "react";
import "../App.css";

function NewRecipe(props) {
  const navigate = useNavigate();
  return (
    <div className="newRecipe">
      {<Header />}
      <h2>Add a New Recipe</h2>
      <Form action="/create" method="post" className="recipe-form">
        <input type="text" name="name" placeholder="Recipe Name" />
        <input type="text" name="image" placeholder="Recipe Image" />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          className="recipe-ingredient-input"
          rows="4"
        />
        <textarea
          name="instructions"
          placeholder="Recipe Directions"
          className="recipe-directions-input"
          rows="4"
        />
        <input type="text" name="prepTime" placeholder="Prep Time" />
        <input type="text" name="cookTime" placeholder="Cooking Time" />
        <input type="text" name="author" placeholder="Author of Recipe" />
        {<StarRating />}
        <input type="submit" value="Add Recipe" />
      </Form>
      <button
        className="back-to-recipes-button"
        onClick={() => navigate("/dashboard")}
      >
        Back To Recipes
      </button>
    </div>
  );
}

export default NewRecipe;
