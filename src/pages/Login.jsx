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

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const { email, isLoading, isError, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
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
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <div>
      <div className="bg-[#EBF0F4] flex justify-center py-14">
        <div className="bg-white border-2 rounded-lg border-t-success shadow-lg p-8 mb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="md:w-96">
            <div className="space-y-3">
              <button
                type="button"
                className="w-full rounded-full border hover:shadow-md transition py-3 font-bold flex items-center justify-center gap-2"
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

              <h3>Sign In</h3>

              <div className="">
                <label className="font-bold text-sm">Email Address</label>
                <input
                  className="input input-bordered w-full"
                  type="email"
                  {...register("email")}
                  id="email"
                  placeholder="someone@example.com"
                />
              </div>

              <div className="">
                <label className="font-bold text-sm">Password</label>
                <input
                  className="input input-bordered w-full"
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
                  className="w-full rounded-full bg-primary py-3 font-bold text-white"
                >
                  Sign In
                </button>
              </div>
              <div>
                <p className="text-center">
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer text-primary hover:underline"
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
