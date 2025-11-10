"use client";
import { useEffect } from "react";

export default function RazorpayButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_Re2TfDPbpMKSNp");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    form.appendChild(script);
  }, []);

  return (
    <>
    <br />
    <form id="razorpay-form"></form>
    </>
  );
}
