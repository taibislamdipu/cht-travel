import React from "react";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  return (
    <div className="space-y-4">
      <h1>PaymentForm</h1>
      <Link to="/cart">
        <button className="btn">Pay Confirm</button>
      </Link>
    </div>
  );
};

export default PaymentForm;
