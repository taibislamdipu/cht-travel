import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
const Cart = () => {
  return (
    <div className="mt-20 space-y-4">
      <h1 className="text-black text-3xl font-bold">Cart</h1>

      <Link to="/" className="inline-block">
        <div className="flex items-center transition hover:text-stone-500 gap-2 ">
          <AiOutlineArrowLeft />
          <p className="underline">See all things to do</p>
        </div>
      </Link>

      <section className="md:grid grid-cols-3 gap-4 pb-32">
        <section className="col-span-2 border-b pb-4 md:pb-0">
          <div className="flex gap-2">
            <div>
              <img
                src="https://i.ibb.co/3CH6qB6/hotel-Image.jpg"
                className="w-96 h-32 md:w-32 md:h-32"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-black">
                Sonargaon & Panam City Tour | Old capital Day Tour Around Dhaka
              </h3>
              <p>
                Sonargaon & Panam City Tour | Old capital Day Tour Around Dhaka
                - 10:00 AM
              </p>
              <p>Friday, January 20, 2023 | 10:00 AM</p>
              <h4 className="text-black font-bold">Total BDT 17,675.19</h4>
            </div>
          </div>
        </section>
        <section className="col-span-1 md:border rounded-3xl p-4 space-y-4">
          <h3>Review Order Details</h3>

          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-sm">Booking Fee</span>
              <span className="text-sm">BDT 0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm">BDT 17,675.19</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base font-bold">Total (1)</span>
              <span className="text-base font-bold">BDT 17,675.19</span>
            </div>
          </div>

          <p className="xs">No additional taxes & fees</p>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
