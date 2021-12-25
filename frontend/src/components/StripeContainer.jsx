import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KABFMSDmeS7lTNxGt65lpCWP4QV1bLtQbPsZMfV1m5NwlRCsNu48h1ljNrexiI36cS9UDfFlkcgKDvfo2WzND6p00HpuSK09F";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
