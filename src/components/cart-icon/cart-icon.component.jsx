import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selectors";

import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(setIsCartOpen(!isCartOpen));
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
