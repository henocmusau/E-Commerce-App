import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className="main-div mb-56 mt-28">
        <div className="flex flex-col justify-center items-center my-12 py-8 main-div">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Account</h1>
            <div className="text-primary">
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <Link
              to="/favourites"
              className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center"
            >
              <AiOutlineHeart size={20} />
            </Link>
            <Link
              to="/shoppingcart"
              className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center"
            >
              <FiShoppingCart size={20} />
            </Link>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
