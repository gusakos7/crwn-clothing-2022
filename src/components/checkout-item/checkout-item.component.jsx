import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const { addItemToCart, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);

  const decreaseQuantityHandler = () => decreaseQuantity(product);
  const addItemHandler = () => addItemToCart(product);
  const removeItemHandler = () => removeItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <span onClick={removeItemHandler}>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
