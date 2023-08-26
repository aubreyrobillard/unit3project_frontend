import React, { useState } from "react";
import { GiCookingGlove } from "react-icons/gi";
import { Form, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "../App.css";

function NewRecipe(props) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);

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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label key={i}>
                <input
                  type="radio"
                  name="star"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <GiCookingGlove
                  className="star"
                  color={ratingValue <= rating ? "#D25251" : "#BAC3C2"}
                  size={30}
                />
              </label>
            );
          })}
        </div>

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
