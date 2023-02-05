import { CartContext } from "./CartContext";
import { useState } from "react";
import { collection, doc , addDoc, getFirestore , updateDoc} from "firebase/firestore";

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let product = cart.find((prod) => prod.id === item.id);
      if (product) {
        if (product.quantity + quantity > product.stock) {
          alert("No hay suficiente stock de ese producto");
          return;
        } else {
          product.quantity += quantity;
          setCart([...cart]);
        }
      }
    } else {
      createProduct(item, quantity);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((element) => element.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId) ? true : false;
  };

  const createProduct = (item, quantity) => {
    if (item.stock < quantity) {
      alert("No hay stock para ese producto");
      return;
    }
    const newProducto = {
      name: item.title,
      description: item.description,
      price: item.price,
      quantity,
      picture: item.imageId,
      category: item.categoryId,
      stock: item.stock,
      id: item.id,
    };
    setCart([...cart, newProducto]);
  };

  const createOrder = (cart, total,buyer) => {

    
    const newOrder = {
      buyer,
      items: cart.map((product) => {
        const { id, description, price } = product;
        return {
          id,
          price,
          title: description,
        };
      }),
      total: total,
    };
    
    const db = getFirestore();
    const querySnapshot = collection(db, "order");

    if(buyer.name === '' || buyer.email === '' || buyer.phone === '' ){
      alert("Se tiene que completar todos los campos");
    }else{
      addDoc(querySnapshot, newOrder)
        .then((response) => {
          alert(`Orden creada ,id : ${response.id}`);	
          updateStock(cart);
          clear();
        })
        .catch((error) => console.log(error));
    }
  };
  
  const updateStock = (cart) =>{
    const db = getFirestore();
    cart.forEach(product => {
      const item = doc(db,"products",product.id);
      updateDoc(item,{stock: product.stock - product.quantity})
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, createOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
