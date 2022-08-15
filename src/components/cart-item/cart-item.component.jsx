import "./cart-item.styles.tsx";

import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}&euro;
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
