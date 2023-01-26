import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import { googleLogin, loginUser } from "../features/auth/authSlice";
import { useMediaQuery } from "react-responsive";
import Footer from "../layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useUpdateUserMutation } from "../api/userSlice";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();

  const { email, isLoading, isError, error } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email]);

  useEffect(() => {
    if (email) {
      updateUser({ email });
      navigate("/");
    }
  }, [email]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <div>
      <h2 className="text-center bg-[#EBF0F4] font-bold py-6 lg:text-2xl text-black text-lg">
        Welcome Back
      </h2>
      <div className="bg-[#EBF0F4] flex justify-center">
        <div className="bg-white border-2 rounded-lg border-t-success shadow-lg p-8 mb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="md:w-96">
            <div className="space-y-3">
              <button
                type="button"
                className="w-full rounded-md border text-black hover:shadow-md transition py-3 font-bold flex items-center justify-center gap-2"
                onClick={handleGoogleLogin}
              >
                <span>
                  <FcGoogle size={23} />
                </span>
                Login with Google
              </button>

              <fieldset className="border-t border-slate-200">
                <legend className="mx-auto px-4">OR</legend>
              </fieldset>

              <h2 className="text-2xl font-bold text-black">Sign In</h2>

              <div className="">
                <label className="font-bold text-sm text-black">
                  Email Address
                </label>
                <input
                  className="input input-bordered w-full bg-white"
                  type="email"
                  {...register("email")}
                  id="email"
                  placeholder="someone@example.com"
                />
              </div>

              <div className="">
                <label className="font-bold text-sm text-black">Password</label>
                <input
                  className="input input-bordered bg-white w-full"
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="password"
                />
              </div>

              <div className="relative !mt-8">
                {/* {isError && <p className=" text-red-400">{error}</p>} */}

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3 font-bold text-white"
                >
                  Sign In
                </button>
              </div>
              <div>
                <p className="text-center">
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer text-primary hover:text-[#333333] underline"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
