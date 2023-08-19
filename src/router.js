import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";

// import loaders
// import actions
// import index, show pages
import Dashboard from "./Pages/Dashboard";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Dashboard/>}/>
            <Route path="/recipes" element={index}/>
        </Route>
));

export default router;