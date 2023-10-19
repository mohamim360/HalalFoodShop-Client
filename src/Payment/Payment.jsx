import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("");

function Payment() {
  return (
    <>
      
			<div>
			Payment
			<Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
			</div>
   
    </>
  );
}

export default Payment;
