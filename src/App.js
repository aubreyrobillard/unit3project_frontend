import Header from "./Components/Header"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Outlet/>
      <Header/>
    </div>
  );
}

export default App;
