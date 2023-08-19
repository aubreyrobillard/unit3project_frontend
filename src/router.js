import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";

// import loaders
// import actions
import Homepage from "./Pages/Homepage";
import Index from "./Pages/Index";
import Show from "./Pages/Show";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Homepage/>}/>
            <Route path="dashboard" element={<Index/>}/>
            <Route path=":id" element={<Show/>}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action ={deleteAction}/>
        </Route>
));

export default router;