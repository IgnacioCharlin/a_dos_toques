import { Button, Card } from "react-bootstrap";
import "./css/Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card className="text-center" border="light" style={{ width: "18rem" }}>
      <Card.Img
        className="imagen-productos"
        variant="top"
        src={`/remeras/${product.imageId}`}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to ={`/camiseta/${product.id}`}>
          <Button  variant="secondary">
            Detalles
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
