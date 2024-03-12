import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { CartWidget } from "./components/CartWidget";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola" />
    </>
  );
}

export default App;
