import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "./assert/data.json";
import { Spinner } from "react-bootstrap";
import "./css/ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productByCategory, setProductByCategory] = useState([]);
  const { categoryId } = useParams();

  const getProductos = new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });

  useEffect(() => {
    getProductos
      .then((response) => {
        setLoading(true);
        return setProducts(response);
      })
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    console.log(categoryId)
    console.log(products);
    if(categoryId !== undefined){
      setProductByCategory(products.filter((p) => p.category == categoryId))
    }
  }, [categoryId]);

  return (
    <>
      {/*}
      <h3>
        Hola <span style={{ fontWeight: "bold" }}>{greeting} </span>
      {loading?<ItemList products={products} />:<Spinner color="light" />}
  </h3>*/}

      {loading?<ItemList products={categoryId ? productByCategory : products} />:<Spinner color="light" />}
    </>
  );
};

export default ItemListContainer;
