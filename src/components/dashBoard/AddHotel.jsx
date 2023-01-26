import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddHotelMutation } from "../../api/hotelSlice";
const AddHotel = () => {
  const { register, handleSubmit, reset } = useForm();

  const [postHotel, { isLoading, isError, isSuccess }] = useAddHotelMutation();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("hotel added", { id: "addHotel" });
      reset();
    }
    if (!isLoading && isError) {
      toast.error("something went wrong", { id: "addHotel" });
    }
  }, [isLoading, isError, reset, isSuccess]);

  const submit = (data) => {
    const hotel = {
      title: data?.name,
      imageURL: data?.image,
      price: data?.price,
      totalRoom: data?.room,
      isAvailable: data.status === "true" ? true : false,
      address: data?.location,
      latitude: data?.latitude,
      longitude: data?.longitude,
      description: data?.description,
    };

    postHotel(hotel);
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
          />
        </div>

        {/* image */}
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-2" htmlFor="image">
            Image
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
          <label className="mb-2" htmlFor="room">
            Total Room
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <input
            type="number"
            name="room"
            id="room"
            {...register("room", { required: true })}
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
            className="rounded-md bg-white border border-gray-300  py-2 px-5 text-lg focus:border-primary focus:ring-primary"
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
            className="rounded-md bg-white border border-gray-300  py-2 px-5 text-lg focus:border-primary focus:ring-primary"
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

        <div className="flex w-full flex-col">
          <label className="mb-2" htmlFor="description">
            Description
            <sup className="text-red-400 font-semibold text-2xl">*</sup>
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            {...register("description", { required: true })}
          />
        </div>

        <>
          {isLoading ? (
            <div className="flex w-full items-center justify-between">
              <button
                disabled
                type="button"
                className="text-white bg-indigo-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2   dark:focus:ring-blue-800 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Submitting...
              </button>
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              <button
                className=" rounded-md bg-indigo-500 px-4 py-3 text-lg font-semibold text-white disabled:bg-gray-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          )}
        </>
      </form>
    </div>
  );
};

export default AddHotel;
