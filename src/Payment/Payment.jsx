import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

function Payment() {
  return (
    <>
      
			<div className="flex-none">
			Payment
			<Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
			</div>
   
    </>
  );
}

export default Payment;
