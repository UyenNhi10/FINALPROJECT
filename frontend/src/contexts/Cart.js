import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = React.createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const isExists = (cartItems = [], item = {}) => {
    for (let cartItem of cartItems) {
      if (cartItem._id === item._id) {
        return cartItem;
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
    setTotal(JSON.parse(localStorage.getItem("total")));
  }, []);

  const addToCart = (course = {}, count) => {
    if (count) {
      const virtualCart = [...cartItems];
      if (cartItems.length === 0) {
        virtualCart.push({ ...course, count: count });
      } else {
        if (!isExists(cartItems, course)) {
          virtualCart.push({ ...course, count: count });
        } else {
          for (let i = 0; i < virtualCart.length; i++) {
            if (virtualCart[i]._id === course._id) {
              virtualCart[i].count += count;
              break;
            }
          }
        }
      }
      localStorage.setItem("cart", JSON.stringify(virtualCart));
      setCartItems(virtualCart);
      getTotal(virtualCart);
    } else {
      const virtualCart = [...cartItems];
      if (cartItems.length === 0) {
        virtualCart.push({ ...course, count: 1 });
      } else {
        if (!isExists(cartItems, course)) {
          virtualCart.push({ ...course, count: 1 });
        } else {
          for (let i = 0; i < virtualCart.length; i++) {
            if (virtualCart[i]._id === course._id) {
              toast.warning("Product Add to Car");
            }
          }
        }
      }
      localStorage.setItem("cart", JSON.stringify(virtualCart));
      setCartItems(virtualCart);
      getTotal(virtualCart);
    }
  };

  const removeFromCart = (id) => {
    const virtualCart = [...cartItems];
    for (let i = 0; i < virtualCart.length; i++) {
      if (virtualCart[i]._id === id) {
        virtualCart.splice(i, 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(virtualCart));
    setCartItems(virtualCart);
    getTotal(virtualCart);
  };

  const getTotal = (arr) => {
    let virtualTotal = 0;
    for (let i in arr) {
      virtualTotal += arr[i].price;
    }
    localStorage.setItem("total", JSON.stringify(virtualTotal));
    setTotal(virtualTotal);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        total: total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
