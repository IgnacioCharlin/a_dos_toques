import { CartContext } from "./CartContext";

import React, { useState } from "react";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if(cart.some(p=> p.id === item.id)){
        const product = cart?.map((p) => {
            if(p.id === item.id){
                p.quantity += quantity
                return p;
            }
            return p;
        })
        setCart(product);
    }else{
        createProduct(item,quantity);
    }
    
    
    // cart.find(p=> p.id === item.id) ? :createProduct(item,quantity)
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

  const createProduct = (item,quantity) =>{
    const newProducto = {
        name: item.title,
        description: item.description,
        price: item.price,
        quantity: quantity,
        picture: item.pictureUrl,
        category: item.category,
        id: item.id,
      };
      setCart([...cart, newProducto]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
