import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './css/ItemCount.css';
const ItemCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="contador">
      <Button className="boton" size="sm" variant="outline-dark" onClick={() => {
        if(count >0)
            setCount(count-1);
        } 
      } >
        <FontAwesomeIcon className="icono" icon={faMinus} />
      </Button>
      <p className="numero">{count}</p>
      <Button className="boton" onClick={() => setCount(count+1)} variant="outline-dark"  size="sm">
        <FontAwesomeIcon className="icono" icon={faPlus} />
      </Button>
    </div>
  );
};

export default ItemCount;
