import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleHotelQuery,
  useUpdateHotelMutation,
} from "../../api/hotelSlice";
import { useForm } from "react-hook-form";

const UpdateHotel = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
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
        if (result.modifiedCount === 1) {
          alert("hi");
        }
      });
  };

  return (
    <div className="flex h-full items-center justify-center ">
      <form
        className="flex max-w-3xl flex-wrap justify-between gap-3 rounded-md bg-white p-10 shadow-lg"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="name">
            Hotel Name{" "}
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder={data?.name}
          />
        </div>

        {/* image */}
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image">
            Image-1
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <input
            type="text"
            name="image"
            id="image"
            {...register("image", { required: true })}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image2">
            Image-2
          </label>
          <input
            type="text"
            name="image2"
            id="image2"
            {...register("image2")}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image3">
            Image-3
          </label>
          <input
            type="text"
            name="image3"
            id="image3"
            {...register("image3")}
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image4">
            Image-4
          </label>
          <input
            type="text"
            name="image4"
            id="image4"
            {...register("image4")}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="price">
            Price
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            {...register("price", { required: true })}
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
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            {...register("location", { required: true })}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="latitude">
            Latitude
          </label>
          <input
            className="rounded-full border border-gray-300  py-2 px-5 text-lg focus:border-primary focus:ring-primary"
            name="latitude"
            id="latitude"
            {...register("latitude", {
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
          />
        </div>

        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="longitude">
            Longitude
          </label>
          <input
            className="rounded-full border border-gray-300  py-2 px-5 text-lg focus:border-primary focus:ring-primary"
            name="longitude"
            id="longitude"
            {...register("longitude", {
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
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
