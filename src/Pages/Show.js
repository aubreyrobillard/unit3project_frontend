import { useLoaderData, Form, useNavigate } from "react-router-dom";
import baseUrl from "../baseUrl";
import "../aubreyStyles.scss";
import { GiCookingGlove } from "react-icons/gi";

function Show(props) {
    const navigate = useNavigate();
    const oneRecipe = useLoaderData();
    const rating = oneRecipe.star;
    const renderGloves = () => {
        let gloves = [];
        for (let i = 0; i < rating; i++) {
        gloves.push(
            <GiCookingGlove className="star" color="#D25251" size={30} />
        );
    }
    return gloves;
  };
  
//   console.log(renderGloves());
  
//   console.log(rating);
  
  return (
    <div className="show-page-container"> 
            
        <div className="recipe-card">
            
            <div className='row1'>
                <h1>{oneRecipe.name}</h1>
            </div>
            
            <div className='row2'>
                <div className='ingredients-container'>
                    <h1>Ingredients: </h1>
                    <div className='ingredients'>
                        <h3>{oneRecipe.ingredients}</h3>
                    </div>
                </div>
                
                <div className="image-container">
                    <img src={oneRecipe.image} alt={oneRecipe.name}></img>
                </div>
            </div>
            
            <div className='row3'>
                <div className='directions-container'>
                    <h1>Directions:</h1>
                    <div className='instructions'>
                        <p>{oneRecipe.instructions}</p>
                    </div>
                </div>
                <div className='prep-time-container'>
                    <h1>Prep Time: </h1>
                    <h1>{oneRecipe.prepTime}</h1>
                </div>
                <div className='cook-time-container'>
                    <h1>Cook Time:  </h1>
                    <h1>{oneRecipe.cookingTime}</h1>
                </div>
                <div className='author-container'>
                    <h1>Author of Recipe:  </h1>
                    <h1>{oneRecipe.author}</h1>
                </div>
                <div className='star-rating-container'>
                    <h1>Rating: </h1>
                    <h1>{renderGloves()} </h1>
                </div>
          
            </div>
        
        </div>

        <div className="show-page-buttons">

            {/*  Edit Recipe Button */}
            <button className="show-edit-recipe-button" onClick={() => navigate(`edit`)}>
            Edit Recipe
            </button>

            {/*  Delete Recipe Button */}
            <Form className='show-delete-button' action={`/delete/${oneRecipe._id}`} method="post">
            <input type="submit" value="Delete Recipe" />
            </Form>

            {/* Back to Recipes Button */}
            <button
            className="show-back-to-recipes-button"
            onClick={() => navigate("/dashboard")}>
            Back to Recipes
            </button>
        </div>
    </div>
  );
}

export default Show