import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./css/ItemCount.css";

const ItemCount = ({onAdd}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="contador mb-2">
        <Button
          className="boton"
          size="sm"
          variant="outline-dark"
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          <FontAwesomeIcon className="icono" icon={faMinus} />
        </Button>
        <p className="numero">{count}</p>
        <Button
          className="boton"
          onClick={() => setCount(count + 1)}
          variant="outline-dark"
          size="sm"
        >
          <FontAwesomeIcon className="icono" icon={faPlus} />
        </Button>
      </div>
      <div className="mb-4">
        <Button
          className="boton"
          onClick={() => onAdd(count)}
          variant="outline-dark"
          size="sm"
        >
          <p className="agregar">Agregar</p>
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
