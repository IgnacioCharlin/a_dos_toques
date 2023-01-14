import { Button, Card} from "react-bootstrap";
import './css/Item.css'

const Item = ({product}) => {
  return (
    <Card className="text-center" border="light" style={{ width: "18rem" }}>
      <Card.Img
        className="imagen-productos"
        variant="top"
        src={product.pictureUrl}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button href={`/camiseta/${product.id}`} variant="secondary">Detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
