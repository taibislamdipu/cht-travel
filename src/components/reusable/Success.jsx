import React from "react";
import paymentSuccess from "../../assets/images/payment.gif";

const Success = () => {
  return (
    <div className="flex justify-between items-center customContainer">
      <h1 className="text-4xl font-bold text-black">
        Your order confirm Successfully!
      </h1>
      <div>
        <img src={paymentSuccess} alt="success" />
      </div>
    </div>
  );
};

export default Success;
