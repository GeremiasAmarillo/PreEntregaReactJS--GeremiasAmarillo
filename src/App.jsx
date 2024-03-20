import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { CartWidget } from "./components/CartWidget";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola" />
    </>
  );
}