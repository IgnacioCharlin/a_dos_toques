import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import "./css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");

    if (categoryId) {
      const newConfiguration = query(
        querySnapshot,
        where("categoryId", "==", parseInt(categoryId))
      );

      getDocs(newConfiguration)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setLoading(true);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setLoading(true);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <>
      {/*}
      <h3>
        Hola <span style={{ fontWeight: "bold" }}>{greeting} </span>
      {loading?<ItemList products={products} />:<Spinner color="light" />}
  </h3>*/}

      {loading ? <ItemList products={products} /> : <Spinner color="light" />}
    </>
  );
};

export default ItemListContainer;
