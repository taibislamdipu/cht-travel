import React from "react";
import { useRemoveHotelMutation } from "../../api/hotelSlice";
import Swal from "sweetalert2";

const DeleteHotel = ({ id }) => {
  const [removeHotel, { isError }] = useRemoveHotelMutation();
  console.log(useRemoveHotelMutation());

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeHotel(id);
        if (!isError) {
          Swal.fire("Deleted!", "This hotel has been deleted.", "success");
        }
      }
    });
  };

  return (
    <td className="p-2">
      <div className="flex justify-center">
        <button onClick={() => handleDelete(id)}>
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
    </td>
  );
};

export default DeleteHotel;
