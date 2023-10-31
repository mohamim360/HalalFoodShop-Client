import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

function Payment() {
  const { totalPrice } = useParams();
  console.log(totalPrice);
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
