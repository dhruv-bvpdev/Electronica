import React from "react";
import { Button } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { payOrder } from "../actions/orderActions";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  const orderId = order._id;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { clientSecret } = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify({
        paymentMethodType: "card",
        currency: "inr",
        order_id: orderId,
      }),
    }).then((r) => r.json());

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      dispatch(payOrder(orderId, paymentIntent));
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement />
          </div>
        </fieldset>
        <Button
          type="submit"
          disabled={!stripe}
          className="col-12 mt-3"
          variant="primary"
        >
          Pay
        </Button>
      </form>
    </>
  );
};

export default PaymentForm;
