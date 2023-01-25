import React, { useEffect } from "react";
import { useGetHotelQuery } from "../../api/hotelSlice";
import toast from "react-hot-toast";
import DeleteHotel from "./DeleteHotel";
import { GrEdit } from "react-icons/gr";
import { BiHotel } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardHotel = () => {
  const { data, isLoading, isError, isSuccess } = useGetHotelQuery();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading Hotels...", { id: "getHotel" });
    }
    if (!isLoading && isSuccess) {
      toast.success("Hotels Loaded", { id: "getHotel" });
    }
    if (!isLoading && isError) {
      toast.error("Something went wrong", { id: "getHotel" });
      console.log(isError);
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-7xl rounded-lg  border border-gray-200 bg-white shadow-lg">
        <header className="border-b border-gray-100 px-5 py-4">
          <div className="font-bold gap-2 text-2xl flex items-center text-black">
            <BiHotel />
            All Hotels
          </div>
        </header>

        <div className="overflow-x-auto p-3">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-xs font-bold uppercase text-black">
              <tr>
                <th>No</th>
                <th className="p-2">
                  <div className="text-left font-semibold">Hotel Name</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Location</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">No. of Rooms</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Type</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Image</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Availability</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Price</div>
                </th>

                <th className="p-2">
                  <div className="text-center font-semibold">Action</div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-sm">
              {data?.map(
                ({
                  title,
                  address,
                  price,
                  isAvailable,
                  classification,
                  totalRoom,
                  imageURL,
                  _id,
                  index,
                }) => (
                  <tr
                    key={_id}
                    className="hover:bg-indigo-50 transition rounded-md cursor-pointer"
                  >
                    <td className="p-2">{index}</td>
                    <td className="p-2">
                      <div className="text-black font-bold">{title}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left capitalize">{address}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left capitalize">{totalRoom}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left capitalize">
                        {classification}
                      </div>
                    </td>
                    <td className="p-2">
                      <img
                        src={imageURL}
                        className="w-20 h-10 object-cover"
                        alt="Hotel Image"
                      />
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        {isAvailable ? (
                          <p className="font-medium text-green-500">
                            Available
                          </p>
                        ) : (
                          <p className="font-medium text-red-500">Stock out</p>
                        )}
                      </div>
                    </td>

                    <td className="p-2">
                      <div className="text-left font-bold text-indigo-500">
                        {price}
                      </div>
                    </td>
                    {/* <td className="p-2">
                    <div className="flex justify-center">
                      <button onClick={() => removeHotel(_id)}>
                        <svg
                          className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td> */}

                    <td className="p-2 flex justify-center items-center space-x-3">
                      <Link to={`hotel/${_id}`}>
                        <GrEdit size={18}></GrEdit>
                      </Link>

                      <DeleteHotel id={_id} color="#c00" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHotel;
