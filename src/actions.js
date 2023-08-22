// import base URL
import baseUrl from "./baseUrl";

// redirect routes
import { redirect } from "react-router-dom";

// CREATE
export const createRecipe = async ({ request }) => {
  // form data
  const formData = await request.formData();
  // new recipe object
  const newRecipe = {
    name: formData.get("name"),
    image: formData.get("image"),
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    prepTime: formData.get("prepTime"),
    cookingTime: formData.get("cookingTime"),
    author: formData.get("author"),
    star: formData.get("star"),
  };
  //send newRecipe to backend
  await fetch(`${baseUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  });
  return redirect("/");
};

//UPDATE
export const updateRecipe = async ({ request, params }) => {
  // id variable
  const id = params.id;
  // form data
  const formData = await request.formData();
  // object of updatedRecipe
  const updatedRecipe = {
    name: formData.get("name"),
    image: formData.get("image"),
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    prepTime: formData.get("prepTime"),
    cookingTime: formData.get("cookingTime"),
    author: formData.get("author"),
    star: formData.get("star"),
  };
  // send updatedRecipe to backend
  await fetch(`${baseUrl}/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedRecipe),
  });
  return redirect(`/${id}`);
};

// DELETE
export const deleteRecipe = async ({ params }) => {
  // id variable
  const id = params.id;
  // send delete request to back end
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return redirect("/");
};
