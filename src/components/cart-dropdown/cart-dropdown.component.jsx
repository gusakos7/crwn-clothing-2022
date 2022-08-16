import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { useCallback } from "react";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  //! It memoizes the function and not its output (ΣΗΜΑΝΤΙΚΟ)
  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {/* <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link> 
      ! ENALLAKTIKA
      */}

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
