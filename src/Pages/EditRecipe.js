import Header from "../Components/Header";
import {Form, useLoaderData, useNavigate} from 'react-router-dom'
import StarRating from '../Components/StarRating'


function EditRecipe(params) {

    const id = params.id
    const oneRecipe = useLoaderData();
    const navigate = useNavigate();

    console.log(oneRecipe)
    
    return (
  <div className="editRecipePage">

    {<Header />}
    <div className="editpage-formElement">
       <h2>Edit the {oneRecipe.name} Recipe</h2>

    <Form action={`/update/${oneRecipe._id}`} method="POST" className="edit-recipe-form">
      <label className="editLabel">Inupt Recipe Name</label><br/>
      <input className="editInputBox" type="text" name="name" placeholder="Recipe Name" defaultValue={oneRecipe.name}/><br/>
      <label className="editLabel">Inupt Recipe URL</label><br/>
      <input className="editInputBox" type="text" name="image" placeHolder="Recipe Image URL" defaultValue={oneRecipe.image} /><br/>
      <label className="editLabel">Inupt Recipe Ingredients</label><br/>
      <textarea className="editInputBox  extra" type="text" name="ingredients" placeHolder="Ingredients" defaultValue={oneRecipe.ingredients} /><br/>
      <label className="editLabel ">Inupt Recipe Instructions</label><br/>
      <textarea className="editInputBox extra" type="text" name="instructions" placeHolder="Instructions" defaultValue={oneRecipe.instructions}/><br/>
      <label className="editLabel">Inupt Prep Time</label><br/>
      <input className="editInputBox" type="text" name="prepTime" placeHolder="Prep Time" defaultValue={oneRecipe.prepTime} /><br/>
      <label className="editLabel">Inupt Cook Time</label><br/>
      <input className="editInputBox" type="text" name="cookingTime" placeHolder="Cooking Time" defaultValue={oneRecipe.cookingTime} /><br/>
      <label className="editLabel">Inupt Author Name</label><br/>
      <input className="editInputBox" type="text" name="author" placeHolder="Author" defaultValue={oneRecipe.author} /><br/>
      <div className="starRating">
      {<StarRating />} 
      </div>
      <br/>
      <input className="editPage-button" type="submit" value="Update Recipe" />
     
    </Form>
    
    
    {/* Back to dashboard button */}
    <button 
      className="editPage-button extra1"
      onClick={() => navigate("/dashboard")}
    >
      Back To Recipes
    </button>
  </div>

</div>
);
}

export default EditRecipe