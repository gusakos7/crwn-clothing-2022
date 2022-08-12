import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return prev =>
      prev.map(cartItem =>
        cartItem.id === existingCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseItemQuantity = (cartItems, productToDecrease) => {
  if (productToDecrease.quantity === 1)
    return cartItems.filter(item => item.id !== productToDecrease.id);
  return cartItems.map(item =>
    item.id === productToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseQuantity: () => {},
  removeItemFromCart: () => {},
  cartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartPrice(newCartPrice);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = product => {
    setCartItems(prev => prev.filter(item => item.id !== product.id));
  };

  const decreaseQuantity = productToDecrease => {
    setCartItems(decreaseItemQuantity(cartItems, productToDecrease));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decreaseQuantity,
    removeItemFromCart,
    cartPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
