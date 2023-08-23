import {Form} from 'react-router-dom'
import StarRating from '../Components/StarRating';


function NewRecipe(props) {
  return (
    <div className="newRecipe">
      <h2>Add a New Recipe</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Recipe Name"/>
            <input type="text" name="image" placeholder="Recipe Image"/>
            <input type="text" name="ingredients" placeholder="Ingredients"/>
            <input type="text" name="instructions" placeholder="Recipe Directions"/>
            <input type="text" name="prepTime" placeholder="Prep Time"/>
            <input type="text" name="cookTime" placeholder="Cooking Time"/>
            <input type="text" name="author" placeholder="Author of Recipe"/>
            {<StarRating/>}
            <input type="submit" value="Add Recipe"/>
        </Form>
    </div>
  );
}

export default NewRecipe;
