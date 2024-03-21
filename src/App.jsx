import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { CardList } from "./components/CardList";
import data from "./data/MOCK_DATA.json";
import { CartWidget } from "./components/CartWidget";
import loader from "./assets/carga.jpg"

export default function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });

    get.then((data) => setPeople(data)).finally(() => setLoading(false));
  }, []);
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, la pagina se esta cargando" />
      {!loading ? (
        <CardList people={people} />
      ) : (
        <img src={loader} alt="adadada" />
      )}
    </>
  );
}
