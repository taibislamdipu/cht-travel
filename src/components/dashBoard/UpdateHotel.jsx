import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleHotelQuery,
  useUpdateHotelMutation,
} from "../../api/hotelSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrEdit } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";

const UpdateHotel = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
  const { data } = useGetSingleHotelQuery(id);
  const [hotelId, setHotelId] = useState(id);

  const submit = (data) => {
    fetch(
      `https://cht-travel-server-production.up.railway.app/updateHotel/${hotelId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Hotel info updated", { id: "updateHotel" });
        reset();
      });
  };

  return (
    <div className="">
      <div className="font-bold gap-2 text-lg p-2 rounded-t-md flex items-center bg-gradient-to-r from-[#111827] to-[#4B5563] text-white">
        <AiFillEdit size={20} color="white" />
        Update Hotel
      </div>
      <form
        className="flex max-w-3xl flex-wrap justify-between gap-3 rounded-md bg-white p-10 shadow-lg"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="name">
            Hotel Name{" "}
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder={data?.title}
            defaultValue={data?.title}
          />
        </div>

        {/* image */}
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            {...register("image")}
            defaultValue={data?.imageURL}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            {...register("price")}
            defaultValue={data?.price}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="room">
            Total Room
          </label>
          <input
            type="number"
            name="room"
            id="room"
            {...register("room")}
            defaultValue={data?.totalRoom}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="available"
                value={true}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            {...register("location")}
            defaultValue={data?.address}
          />
        </div>

        <div className="flex w-full flex-col">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            {...register("description")}
            defaultValue={data?.description}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <button
            className=" rounded-md bg-indigo-500 px-4 py-3 text-lg font-semibold text-white disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHotel;
