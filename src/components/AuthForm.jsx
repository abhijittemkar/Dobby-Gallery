import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ handleOnSubmit, handleOnChange, formData, btnTxt }) => {
  const { email, password } = formData;
  return (
    <div className="flex justify-center items-center m-auto bg-neutral-100 border min-h-[60vh] min-w-[80vw] md:min-w-[50vw] rounded-xl shadow-lg shadow-slate-300">
      <div className="border-2 border-black p-5 bg-black/[0.8] rounded-lg shadow-md">
        <form
          onSubmit={handleOnSubmit}
          className="flex w-full flex-col mx-auto gap-y-4"
        >
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white font-semibold tracking-wider">
              Email
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="w-full rounded-[0.5rem] p-[12px] outline-none"
            />
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white font-semibold tracking-wider">
              Password
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full rounded-[0.5rem] p-[12px] pr-12 outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-yellow-100 hover:bg-yellow-200 transition duration-200 shadow-md py-[8px] px-[12px] font-medium text-richblack-900"
          >
            {btnTxt}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
