import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

import "./Cart.css";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, removeItem, clear, createOrder } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   console.log(event);
  //   const form = event.currentTarget;
   
  //   console.log(form.checkValidity())
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }else{
  //     console.log("aca");
  //     createOrder(cart,total,formValue);
  //   }
    
  //   setValidated(true);
  // };

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) => {
        return prev + curr.quantity * curr.price;
      }, 0)
    );
  }, [cart]);

  const handleInput = (event) => {
    const {value , id} = event.target;

    setFormValue({
      ...formValue,
      [id] : value
    });

  }

  return (
    <>
      {cart.length === 0 ? (
        <h2 key="sin-productos" className="text-center mt-5">
          No hay productos en el carrito
        </h2>
      ) : (
        <div>
          <Table striped hover size="sm mt-5">
            <thead className="text-center align-middle">
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody className="text-center align-middle">
              {cart.map((p) => (
                <tr id={p.id}>
                  <td>
                    <div className="producto-carrito">
                      <img
                        className="imagen-carrito"
                        alt={p.id}
                        src={`/remeras/${p.picture}`}
                      />
                      {p.name}
                    </div>
                  </td>
                  <td>{p.quantity}</td>
                  <td>{p.quantity * p.price}</td>
                  <td>
                    <Button onClick={() => removeItem(p.id)} variant="danger">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))}
              <tr id="total">
                <td colSpan={2}>Total</td>
                <td className="total" colSpan={2}>
                  {total}
                </td>
              </tr>
            </tbody>
          </Table>
          <Form className="mt-5 w-50 mx-auto">
            <h2 className="display-4 mb-3">Datos del comprador</h2>
            <Form.Group className="mb-3 ">
              <Form.Control
                id="name"
                placeholder="nombre"
                className="mb-3 name"
                value={formValue.name}
                onChange={handleInput}
              />
              <Form.Control
                id="phone"
                placeholder="telefono"
                className="mb-3"
                value={formValue.phone}
                onChange={handleInput}
              />
              <Form.Control
                id="email"
                placeholder="email"
                className="mb-3"
                value={formValue.email}
                onChange={handleInput}
              />
            </Form.Group>
            <div className="d-flex w-50 justify-content-around mx-auto">
              <Button onClick={clear} variant="warning" className="text-white">
                Vaciar Carrito
              </Button>
              <Button onClick={() => createOrder(cart, total, formValue)}
                variant="success"
              >
                Generar Orden
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default Cart;
