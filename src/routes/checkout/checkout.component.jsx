import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selectors";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove </span>
        </div>
      </div>
      {cartItems &&
        cartItems.map((product) => (
          <CheckoutItem key={product.id} product={product} />
        ))}
      <span className="total">Total: {cartTotal}&euro;</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
