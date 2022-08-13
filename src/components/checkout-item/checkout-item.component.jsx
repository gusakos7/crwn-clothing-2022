import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";

import "./checkout-item.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selectors";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, product));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, product));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <span onClick={clearItemHandler}>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
