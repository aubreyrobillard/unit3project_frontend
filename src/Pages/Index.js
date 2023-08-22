import { useNavigate, Link, useLoaderData, Form } from "react-router-dom";
import baseUrl from "../baseUrl";
import StarRating from "../Components/StarRating";

function Index(props) {
    const allRecipes = useLoaderData();
    const navigate = useNavigate()
    return (
        <div>
            <h1>Taste Tally</h1>
            {allRecipes.map((recipe, index) => {
                return (
                    <div key={recipe._id} className="recipes">
                        <Link to={`/${recipe._id}`}>
                            <h1>{recipe.name}</h1>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Index