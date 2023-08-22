import { useLoaderData, Form, useNavigate } from "react-router-dom"
import baseUrl from "../baseUrl"

function Show(props) {
    const navigate = useNavigate();
    const oneRecipe = useLoaderData();
    return (
        <div className="recipe">
            <h1>{oneRecipe.name}</h1>
            <img src={oneRecipe.image} alt={oneRecipe.name}></img>
        </div>
    )
}

export default Show