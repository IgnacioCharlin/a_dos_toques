import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState ,useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart?.reduce((prev, curr) => {
       return prev + curr.quantity * curr.price;
     }, 0));
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? <h2 className="text-center mt-5">No hay productos en el carrito</h2> : (
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
                <td>{p.name}</td>
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
              <td className="total" colSpan={2}>{total}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Cart;
