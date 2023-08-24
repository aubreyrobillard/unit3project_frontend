import Header from "../Components/Header";
import {Form, useLoaderData, useNavigate} from 'react-router-dom'
import StarRating from '../Components/StarRating'


function EditRecipe(params) {

    const id = params.id
    const oneRecipe = useLoaderData();
    const navigate = useNavigate();

    console.log(oneRecipe)
    
    return (
    <div className="editRecipe">

    {<Header />}

    <h2>Edit the {oneRecipe.name} Recipe</h2>

    <Form action={`/update/${oneRecipe._id}`} method="POST" className="edit-recipe-form">
      <input type="text" name="name" placeholder="Recipe Name" defaultValue={oneRecipe.name}/>
      <input type="text" name="image" placeHolder="Recipe Image URL" defaultValue={oneRecipe.image} />
      <input type="text" name="ingredients" placeHolder="Ingredients" defaultValue={oneRecipe.ingredients} />
      <input type="text" name="instructions" placeHolder="Instructions" defaultValue={oneRecipe.instructions}/>
      <input type="text" name="prepTime" placeHolder="Prep Time" defaultValue={oneRecipe.prepTime} />
      <input type="text" name="cookingTime" placeHolder="Cooking Time" defaultValue={oneRecipe.cookingTime} />
      <input type="text" name="author" placeHolder="Author" defaultValue={oneRecipe.author} />
      {<StarRating />}
      <input type="submit" value="Update Recipe" />
    </Form>
    
    
    {/* Back to dashboard button */}
    <button
      className="back-to-recipes-button"
      onClick={() => navigate("/dashboard")}
    >
      Back To Recipes
    </button>

  </div>
);
}

export default EditRecipe