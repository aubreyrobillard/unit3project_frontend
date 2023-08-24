// ****** these may not need "recipe" in the url bc backend doesn't have it *****

import baseUrl from "./baseUrl";

export const oneRecipeLoader = async ({ params }) => {
  // add auth check

  // make a variable for the id params
  const id = params.id;
  // call the backend show route
  const showResponse = await fetch(`${baseUrl}/${id}`);
  // convert to JSON
  const oneRecipe = await showResponse.json();
  // return the single recipe
  return oneRecipe;
};

export const allRecipesLoader = async () => {
  // add auth check

  // call backend index route
  const indexResponse = await fetch(`${baseUrl}`);
  // convert to json object
  const allRecipes = await indexResponse.json();
  // return recipes
  return allRecipes;
};

export const editRecipeLoader = async ({params}) => {
  const id = params.id;
  const showResponse = await fetch(`${baseUrl}/${id}`);
  const editRecipe = await showResponse.json()
  return editRecipe
}