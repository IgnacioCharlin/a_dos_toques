import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);

    getDoc(querySnapshot)
      .then((response) => {
        setProducts({id:response.id, ...response.data()});
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {loading ? <ItemDetail product={products} /> : <Spinner color="light" />}
    </div>
  );
};

export default ItemDetailContainer;
