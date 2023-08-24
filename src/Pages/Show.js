import { useLoaderData, Form, useNavigate } from "react-router-dom"
import baseUrl from "../baseUrl"
import StarRating from "../Components/StarRating";
import {Link} from 'react-router-dom'

function Show(props) {
    const navigate = useNavigate();
    const oneRecipe = useLoaderData();

    return (

        <div className="recipe"> 

            <h1>{oneRecipe.name}</h1>
            <img src={oneRecipe.image} alt={oneRecipe.name}></img>
            <h3>Ingredients: {oneRecipe.ingredients}</h3>
            <h3>Directions: {oneRecipe.instructions}</h3>
            <h2>Prep Time: {oneRecipe.prepTime}</h2>
            <h2>Cook Time: {oneRecipe.cookingTime}</h2>
            <h2>Author of Recipe: {oneRecipe.author}</h2>
            <h2>Star Rating: <StarRating/></h2>

            <div>
            
            </div>

        {/* Logout button */}
        <button
            onClick={async () => {
            await fetch(`${baseUrl}/logout`);
            localStorage.removeItem("loggedIn");
            navigate("/");
            }}
        >Logout</button>

        {/*  Edit Recipe Button */}
        <button
            className="edit-recipe-button"
            onClick={() => navigate(`edit`)}
        >Edit Recipe</button>

        {/*  Delete Recipe Button */}
        <Form action={`/delete/${oneRecipe._id}`} method="post">
          <input type="submit" value="Delete Recipe"/>
        </Form>

        {/* Back to Recipes Button */}
        <button className='back-to-recipes-button' onClick={()=>navigate("/dashboard")}>Back to Recipes</button>



        </div>
    )
}

export default Show