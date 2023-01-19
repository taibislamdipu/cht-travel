import React, { useEffect } from "react";
import { useGetHotelQuery } from "../../api/hotelSlice";
import toast from "react-hot-toast";
import DeleteHotel from "./DeleteHotel";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";

const DashboardHotel = () => {
  const { data, isLoading, isError, isSuccess } = useGetHotelQuery();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading Hotels...", { id: "getHotel" });
    }
    if (!isLoading && isSuccess) {
      toast.success("Hotels loaded", { id: "getHotel" });
    }
    if (!isLoading && isError) {
      toast.error("something went wrong", { id: "getHotel" });
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="mx-auto w-full max-w-7xl rounded-lg  border border-gray-200 bg-white shadow-lg">
        <header className="border-b border-gray-100 px-5 py-4">
          <div className="font-semibold text-gray-800">Hotels</div>
        </header>

        <div className="overflow-x-auto p-3">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
              <tr>
                <th></th>
                <th className="p-2">
                  <div className="text-left font-semibold">Hotel Name</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Location</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold">Avaibility</div>
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
              {data?.map(({ name, location, price, status, _id }) => (
                <tr key={_id}>
                  <td className="p-2">
                    <input type="checkbox" className="h-5 w-5" value="id-1" />
                  </td>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">{name}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left capitalize">{location}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left">
                      {status ? (
                        <p classNameName="font-medium text-green-500">
                          Available
                        </p>
                      ) : (
                        <p classNameName="font-medium text-red-500">
                          Stock out
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-indigo-500">
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

                    <DeleteHotel id={_id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHotel;
