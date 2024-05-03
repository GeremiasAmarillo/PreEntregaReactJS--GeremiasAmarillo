import { Container, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };
    console.log(order);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };

  const handleRemove = (id) => removeItem(id);
  const handleClear = () => clear();

  return (
    <Container className="mt-4" style={{ textAlign: "center" }}>
      <h1 className="mb-4" style={{ color: "white" }}>
        Carrito de compras
      </h1>
      {items.map((item) => (
        <div key={item.id} className="mb-3 p-3 border rounded">
          <p className="mb-0" style={{ color: "white", fontSize: "1.5rem" }}>
            <strong>Producto:</strong> {item.title}
          </p>
          <p className="mb-0" style={{ color: "white", fontSize: "1.5rem" }}>
            <strong>Cantidad:</strong> {item.quantity}
          </p>
          <p className="mb-0" style={{ color: "white", fontSize: "1.5rem" }}>
            <strong>Precio:</strong> ${item.price}
          </p>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleRemove(item.id)}
            className="mt-2"
          >
            Eliminar
          </Button>
        </div>
      ))}
      <div className="mb-3" style={{ color: "white", fontSize: "2rem" }}>
        <strong>Total:</strong> ${total()}
      </div>
      <Button variant="danger" onClick={handleClear}>
        Borrar Carrito
      </Button>
      {items.length === 0 && (
        <Link to="/">
          <Button variant="primary" className="mt-4">
            Ver los productos
          </Button>
        </Link>
      )}
      {items.length > 0 && (
        <form className="mt-4" style={{ color: "white", fontSize: "1.5rem" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-control mb-3"
          />
          <label>Celular:</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
            className="form-control mb-3"
          />
          <label>Email:</label>
          <input
            type="text"
            value={values.email}
            name="email"
            onChange={handleChange}
            className="form-control mb-3"
          />
          <Button variant="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </form>
      )}
    </Container>
  );
};
