import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Pages/Homepage";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
// import loaders
import { createRecipe } from "./actions";
import { updateRecipe } from "./actions";
import { deleteRecipe } from "./actions";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Homepage/>}>
                {/* Add routes in if signup/login done */}
                {/* <Route path="/signup" element={<Signup/>}/> */}
                {/* <Route path="/login" element={<Login/>}/> */}
            </Route>
            <Route path="dashboard" element={<Index/>}/>
            <Route path=":id" element={<Show/>}/>
            <Route path="create" action={createRecipe}/>
            <Route path="update/:id" action={updateRecipe}/>
            <Route path="delete/:id" action ={deleteRecipe}/>
        </Route>
));

export default router;