import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51LWfE2CBQ8wX2K2Ey79VpZJqGvtwjgmyqUFcXB1EimZNEyBzwYcCDCQtjxCLQZrPL6CNQmYBWvIzJlc3g7YngZ4S00GNbYdr0O"
);
// process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

export const stripeOptions = {
  // passing the client secret obtained from the server
  clientSecret: `${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
};
