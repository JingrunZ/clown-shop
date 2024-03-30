import { clearCart } from "../cart/cart.action";

export const setPaymentStatus= (status) => {
  return {
    type: "SET_PAYMENT_STATUS", payload:status
  };
};
