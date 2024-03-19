import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Routes";
import Header from "./components/Nabvar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
