import React from "react";

const Steps = () => {
  return (
    <div className="max-w-350 mx-auto py-30 ">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold ">Get Started in 3 Steps</h1>
        <p className="text-gray-600">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex justify-center max-lg:flex-col items-center gap-3 my-7">
        <div className="text-center px-4 max-w-95 border border-gray-200 rounded-2xl shadow space-y-3 transform transition duration-500 hover:-translate-y-5 relative p-6">
          <span className="absolute py-2  px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white right-1 mx-6  ">
            1
          </span>
          <img className="mx-auto mt-8" src="/user.png" alt="" />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="mb-8">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="text-center max-w-95 border border-gray-200 rounded-2xl shadow space-y-3 transform transition duration-500 hover:-translate-y-5 relative p-6">
          <span className="absolute py-2  px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white right-1 mx-6  ">
            2
          </span>
          <img className="mx-auto mt-8" src="/package.png" alt="" />
          <h2 className="text-2xl font-bold">Choose Products</h2>
          <p className="mb-8">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="text-center max-w-95 border border-gray-200 rounded-2xl shadow space-y-3 transform transition duration-500 hover:-translate-y-5  relative p-6">
          <span className="absolute py-2  px-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white right-1 mx-6  ">
            3
          </span>
          <img className="mx-auto mt-8" src="/rocket.png" alt="" />
          <h2 className="text-2xl font-bold">Start Creating</h2>
          <p className="mb-8">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
