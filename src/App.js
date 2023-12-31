import StarRating from "./Components/StarRating";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App(props) {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
