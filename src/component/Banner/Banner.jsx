import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className=" max-w-350 mx-auto flex justify-between gap-3 my-8">
      <div className="content-center  gap-6">
        <p className="bg-[#E1E7FF] font-semibold my-12 text-[#4F39F6] inline px-6 py-2 rounded-full ">
          New: AI-Powered Tools Available
        </p>
        <h1 className="text-7xl font-bold my-6">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 my-5">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-4">
          <button className="btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
            Explore Products
          </button>
          <button className="btn btn-outline text-[#4F39F6] rounded-full">
            {" "}
            <CiPlay1 /> Watch Demo
          </button>
        </div>
      </div>
      <div className="">
        <img src="/src/assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
