import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./css/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState , useContext} from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const {addItem} = useContext(CartContext);
  const [count, setCount] = useState(0);


  return (
    <Card className="text-center" border="light" style={{ width: "18rem" }}>
      <Link to="/">
        <Button variant="danger" className="salir position-abosulute">
          <FontAwesomeIcon className="icono" icon={faTimes} />
        </Button>
      </Link>
      <Card.Img
        className="imagen-productos mt-4 d-flex justify-content-center"
        variant="top"
        src={`/remeras/${product.imageId}`}
      />
      <Card.Body className="text-center ">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Stock Disponible : {product.stock}</Card.Text>
        <Card.Text className="precio">$ {product.price}</Card.Text>
        <ItemCount cantidad={count} actualizarCantidad = {setCount} />

        <div className="mb-4">
        <Button
          onClick={() => addItem(product,count)}
          className="boton"
          variant="outline-dark"
          size="sm"
        >
          <p className="agregar">Agregar</p>
        </Button>
      </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
