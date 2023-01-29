import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./css/ItemCount.css";

const ItemCount = ({cantidad , actualizarCantidad}) => {

  const increment = () => {
    actualizarCantidad(cantidad + 1);
  }

  const decrement = () => {
    if(cantidad > 0){
      actualizarCantidad(cantidad - 1);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="contador mb-2">
        <Button
          className="boton"
          size="sm"
          variant="outline-dark"
          onClick={decrement}
        >
          <FontAwesomeIcon className="icono" icon={faMinus} />
        </Button>
        <p className="numero">{cantidad}</p>
        <Button
          className="boton"
          onClick={increment}
          variant="outline-dark"
          size="sm"
        >
          <FontAwesomeIcon className="icono" icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
