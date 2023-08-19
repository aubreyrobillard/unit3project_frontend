import logo from "./logo.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <StarRating />
    </div>
  );
}

export default App;
