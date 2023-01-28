import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleHotelQuery,
  useUpdateHotelMutation,
} from "../../api/hotelSlice";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { AiFillEdit } from "react-icons/ai";

const UpdateHotel = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();
  const { data } = useGetSingleHotelQuery(id);
  const [hotelId, setHotelId] = useState(id);

  const domain = "https://cht-travel-server-production.up.railway.app";
  // const domain = "http://localhost:5000";

  const submit = (data) => {
    console.log(data);

    fetch(`${domain}/updateHotel/${hotelId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
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
        {/* <label>
          Select Yes or No:
          <select name="yesno" {...register("yesno")}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label> */}

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
            {...register("price", { valueAsNumber: true })}
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
            {...register("room", { valueAsNumber: true })}
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

        {/* <div className="form-check">
          <label htmlFor="fries">
            <input
              {...register("food", { required: true })}
              type="radio"
              name="food"
              value="Fries"
              className="form-check-input"
              id="fries"
            />
            French Fries
          </label>
        </div>
        <div className="text-danger mt-3">
          {errors.food?.type === "required" &&
            "Tell us what is your favourite food."}
        </div> */}

        <div className="flex w-full items-center justify-between">
          <button
            className=" rounded-md bg-indigo-500 px-4 py-3 text-lg font-semibold text-white disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-3xl flex-wrap justify-between gap-3 rounded-md bg-white p-10 shadow-lg"
      >
        <label>
          Hotel Name:
          <input
            name="hotelName"
            type="text"
            {...register("hotelName", { required: true })}
            placeholder={data?.title}
            defaultValue={data?.title}
          />
          {errors.hotelName && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Image:
          <input
            name="image"
            type="text"
            {...register("image", { required: true })}
            defaultValue={data?.imageURL}
          />
          {errors.image && "Image URL is required"}
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            {...register("price", { required: true })}
            defaultValue={data?.price}
          />
          {errors.price && <span>Price is required</span>}
        </label>

        <br />
        <label>
          Total Rooms:
          <input
            name="totalRooms"
            type="number"
            {...register("totalRooms", { required: true })}
            defaultValue={data?.totalRoom}
          />
          {errors.totalRooms && "Total Rooms is required"}
        </label>
        <br />
        <label>
          Is Available:
          <input
            name="isAvailable"
            type="radio"
            value={true}
            {...register("isAvailable", { required: true })}
          />
          Yes
          <input
            name="isAvailable"
            type="radio"
            value={false}
            {...register("isAvailable", { required: true })}
          />
          No
        </label>
        <br />
        <label>
          Address:
          <input
            name="location"
            type="text"
            {...register("location", { required: true })}
            defaultValue={data?.address}
          />
          {errors.location && "Location is required"}
        </label>
        <br />
        <label>
          Latitude:
          <input
            name="latitude"
            type="text"
            {...register("latitude", { required: true })}
            defaultValue={data?.latitude}
          />
          {errors.latitude && "Latitude is required"}
        </label>
        <br />
        <label>
          Longitude:
          <input
            name="longitude"
            type="text"
            {...register("longitude", { required: true })}
            defaultValue={data?.longitude}
          />
          {errors.longitude && "Longitude is required"}
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            {...register("description", { required: true })}
            defaultValue={data?.description}
          ></textarea>
          {errors.description && "Description is required"}
        </label>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form> */}
    </div>
  );
};

export default UpdateHotel;
