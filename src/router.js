import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Homepage from "./Pages/Homepage";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import { updateRecipe, deleteRecipe, createRecipe } from "./actions";
import { oneRecipeLoader, allRecipesLoader, editRecipeLoader } from "./loaders";
import NewRecipe from "./Pages/NewRecipe";
import EditRecipe from "./Pages/EditRecipe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Homepage/>}/>
      <Route path="dashboard" element={<Index />} loader={allRecipesLoader}/>
      <Route path=":id" element={<Show />} loader={oneRecipeLoader}/>
      <Route path="create" element={<NewRecipe />} action={createRecipe}/>
      <Route path=":id/edit" element={<EditRecipe/>} loader={editRecipeLoader}/>
      <Route path="update/:id" action={updateRecipe}/>
      <Route path="delete/:id" action={deleteRecipe}/>
    </Route>
  )
);

export default router;