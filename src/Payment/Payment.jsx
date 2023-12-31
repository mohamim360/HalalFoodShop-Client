import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

function Payment() {
  const { totalPrice } = useParams();
  const price = parseFloat(totalPrice).toFixed(2);

  console.log(price);
  return (
    <>
      <div className="flex-none">
        Payment
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </>
  );
}

export default Payment;
