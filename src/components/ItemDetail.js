import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./css/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
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
        src={product.pictureUrl}
      />
      <Card.Body className="text-center ">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ItemCount />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
