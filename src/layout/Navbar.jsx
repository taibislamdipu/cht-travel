import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { logout } from "../features/auth/authSlice";
import chtTravelLogoTwo from "../assets/images/cht-travel-logo-two.png";
import { useMediaQuery } from "react-responsive";
import {
  AiFillCar,
  AiOutlineLogin,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import { BiHotel } from "react-icons/bi";
import { emptyCart } from "../features/cartSlice";
import { useLocation } from "react-router-dom";
import { useCheckAdminQuery } from "../api/userSlice";

const Navbar = () => {
  const { email, photoURL } = useSelector((state) => state?.auth);
  const { cart } = useSelector((state) => state.cart);
  const { data } = useCheckAdminQuery(email);

  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      dispatch(emptyCart());
    });
  };

  const location = useLocation();
  const currentUrl = location?.pathname;

  return (
    <nav
      className={`${
        currentUrl === "/" && "navbar-fixed"
      } navbar bg-white lg:px-40`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box space-y-2 menu-compact text-black font-bold mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="bg-white p-2 space-y-1">
                <li>
                  <Link to="/hotels">Hotels</Link>
                </li>
                <li>
                  <a>Transportation</a>
                </li>
                <li>
                  <a>Tourist Sight</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link> Eng | বাংলা</Link>
            </li>

            {data?.admin && (
              <Link to="/dashboard" className="btn">
                Dashboard
              </Link>
            )}
            {email ? (
              <button className="btn btn-primary" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link to="/">
          {isTabletOrMobile ? (
            <span className="font-bold text-xl normal-case">CHT-Travel</span>
          ) : (
            <div>
              <img className="w-20 h-20" src={chtTravelLogoTwo} alt="" />
            </div>
          )}
        </Link>
      </div>

      {/* for web */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 text-black font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="z-10 bg-white p-2 space-y-2">
              <li>
                <Link to="/hotels">
                  <BiHotel size={23} />
                  Hotels
                </Link>
              </li>
              <li className="text-gray-400 cursor-not-allowed">
                <a>
                  <AiFillCar size={23} />
                  Transportation
                </a>
              </li>
              <li className="text-gray-400 cursor-not-allowed">
                <a>
                  <CiMap size={23} />
                  Tourist Sight
                </a>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>

          <li>
            <Link to="/cart">
              {cart?.length > 0 && (
                <div className="indicator">
                  <AiOutlineShoppingCart size={23} />
                  <span className="badge badge-xs badge-info indicator-item">
                    {cart?.length}
                  </span>
                </div>
              )}
              Cart
            </Link>
          </li>
        </ul>
      </div>
      {!isTabletOrMobile && (
        <div className="navbar-end gap-2">
          {email ? (
            <button className="btn btn-sm btn-primary" onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          )}

          {data?.admin && (
            <Link to="/dashboard" className="btn btn-sm btn-primary">
              Dashboard
            </Link>
          )}
          <div className="">
            Eng <span className="font-bold">| বাংলা</span>
          </div>
          {photoURL && (
            <div>
              <img src={photoURL} className="rounded-full w-10" alt="" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
