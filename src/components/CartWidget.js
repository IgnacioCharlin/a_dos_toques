import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./css/CartWidget.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart?.reduce((prev, curr) => {
       return prev + curr.quantity;
     }, 0));
  }, [cart]);

  return (
    <div>
      <Button size="lg" variant="primary">
        {" "}
        {total} <FontAwesomeIcon icon={faCartShopping} />
      </Button>
    </div>
  );
};

export default CartWidget;
