import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

// @desc: process payments through stripe
// @route: /api/payment
// @access: Private/Protected
export const makePayment = asyncHandler(async (req, res) => {
  const { order_id } = req.body;
  const order = await Order.findById(order_id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: order.totalPrice * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({ clientSecret: payment.client_secret });
  } catch (error) {
    console.log(error);
  }
});
