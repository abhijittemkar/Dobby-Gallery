import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center m-auto bg-neutral-100 border min-h-[60vh] min-w-[80vw] md:min-w-[50vw] rounded-xl shadow-lg shadow-slate-300">
      <div className="flex justify-between gap-8 bg-black/[0.8] p-5 rounded-lg">
        <Link to={"/login"}>
          <button className="border-2 border-black px-5 py-2 rounded-md  bg-yellow-100 hover:bg-yellow-200 shadow-md transition duration-200">
            Login
          </button>
        </Link>

        <Link to={"/signup"}>
          <button className="border-2 border-black px-5 py-2 rounded-md  bg-yellow-100 hover:bg-yellow-200 shadow-md transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
