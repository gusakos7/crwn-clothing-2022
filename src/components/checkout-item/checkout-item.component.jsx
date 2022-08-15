import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";

import "./checkout-item.styles.tsx";
import { selectCartItems } from "../../store/cart/cart.selectors";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan className="name">{name}</BaseSpan>
      <Quantity className="quantity">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton>
        <span onClick={clearItemHandler}>&#10005;</span>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
