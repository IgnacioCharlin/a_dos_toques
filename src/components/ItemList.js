import "./css/ItemList.css";
import Item from "./Item";

const ItemList = ({products}) => {
  
  
  return (
    <div className="container-products">
      {products.map((product) => (
        <Item key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ItemList;
