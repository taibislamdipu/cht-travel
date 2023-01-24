import React from "react";
import paymentSuccess from "../../assets/images/payment.gif";

const Success = () => {
  return (
    <div className="md:flex justify-between gap-4 space-y-8 p-8 items-center customContainer">
      <h2 className="md:text-4xl text-2xl font-bold text-black">
        Your order confirm Successfully!
      </h2>
      <div>
        <img src={paymentSuccess} alt="success" />
      </div>
    </div>
  );
};

export default Success;
