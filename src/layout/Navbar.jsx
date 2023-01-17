import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { logout } from "../features/auth/authSlice";
import chtTravelLogoTwo from "../assets/images/cht-travel-logo-two.png";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const { email, error, isError, isLoading, role } = useSelector(
    (state) => state?.auth
  );

  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <nav className="navbar bg-base-100">
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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
              <ul className="bg-white p-2">
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
            {email ? (
              <button className="btn" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}

            {email && (
              <Link to="/dashboard" className="btn">
                Dashboard
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
        <ul className="menu menu-horizontal px-1">
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
            <ul className="z-10 bg-white p-2">
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
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {email ? (
          <button className="btn" onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}

        {email && (
          <Link to="/dashboard" className="btn">
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
