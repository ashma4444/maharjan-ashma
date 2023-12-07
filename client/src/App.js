import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import SideMenu from "./layouts/SideMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
