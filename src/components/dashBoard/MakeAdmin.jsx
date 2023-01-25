import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsShieldExclamation } from "react-icons/bs";
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
    <div>
      <h4 className="font-bold text-2xl text-black py-4">
        Make someone an admin as you choose.
      </h4>

      <hr className="w-75 mb-5 mx-auto" />

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

      <div className="flex items-center bg-white p-4 gap-4 rounded-md w-fit mt-6">
        <span>
          {" "}
          <BsShieldExclamation size={23} />
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
  );
};

export default MakeAdmin;
