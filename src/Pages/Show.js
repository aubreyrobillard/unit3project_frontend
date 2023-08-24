import { useLoaderData, Form, useNavigate } from "react-router-dom"
import baseUrl from "../baseUrl"
import StarRating from "../Components/StarRating";
import {Link} from 'react-router-dom'
import "../aubreyStyles.scss"

function Show(props) {
    const navigate = useNavigate();
    const oneRecipe = useLoaderData();

    return (

        <div className="show-page-container"> 
            
            <div className="recipe-card">
                <h1>{oneRecipe.name}</h1>
                <img src={oneRecipe.image} alt={oneRecipe.name}></img>
                <h3>Ingredients: {oneRecipe.ingredients}</h3>
                <h3>Directions: {oneRecipe.instructions}</h3>
                <h3>Prep Time: {oneRecipe.prepTime}</h3>
                <h3>Cook Time: {oneRecipe.cookingTime}</h3>
                <h3>Author of Recipe: {oneRecipe.author}</h3>
                <h3>Star Rating: <StarRating/></h3>
            </div>


            <div className='show-page-buttons'>
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


        </div>
    )
}

export default Show