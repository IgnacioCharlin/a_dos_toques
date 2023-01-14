import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import data from "./assert/data.json";
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [loading ,setLoading] = useState(false);
  
  const getProductos = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });

  useEffect(() => {
    getProductos
      .then((response) => {
        setProducts(response.find(detailProduct=>detailProduct.id == id));
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    
      <div className="d-flex justify-content-center">
        {loading ? <ItemDetail product={products} /> : <Spinner color="light" />}
      </div>
  );
};

export default ItemDetailContainer;
