import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsShieldExclamation, BsShieldFillExclamation } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { useMakeAdminMutation } from "../../api/userSlice";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [makeAdmin] = useMakeAdminMutation();

  const onSubmit = (data) => {
    if (data.email) {
      makeAdmin(data);
      toast.success(`${data.email} is now an admin`);
      reset();
    }
  };

  return (
    <div className="bg-white">
      <div className="font-bold gap-2 h-16 text-lg p-2 rounded-t-md flex items-center bg-gradient-to-r from-[#111827] to-[#4B5563] text-white">
        <IoPersonAddSharp size={20} />
        Make someone an admin as you choose.
      </div>

      <hr className="w-75 mb-5 mx-auto" />

      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-3 md:w-80 w-full input-field"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />

          {/* <input
          className="bg-indigo-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-indigo-600 cursor-pointer"
          type="submit"
          value="Make as Admin"
        /> */}
          <button
            type="submit"
            className="bg-indigo-500 text-white flex items-center gap-2 py-2 px-4 mt-2 rounded-lg hover:bg-indigo-600 cursor-pointer"
          >
            <IoPersonAddSharp size={20} />
            Make as Admin
          </button>
        </form>

        <div className="flex border items-center bg-white p-4 gap-4 rounded-md w-fit mt-6">
          <span>
            {" "}
            <BsShieldFillExclamation size={23} color={"#eed202 "} />
          </span>
          <p>
            A user becomes an admin by providing a valid{" "}
            <span className="font-bold">email address</span> and can <br />
            access the dashboard and use all features. Only an admin can make{" "}
            <br />
            another user an admin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
