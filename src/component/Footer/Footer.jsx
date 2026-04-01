import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white w-full py-20">
      <div className="max-w-350 mx-auto flex space-y-7 px-5 justify-between max-lg:flex-col ">
        <div className="flex-1 max-w-sm mx-auto max-lg:text-center">
          <h2 className="text-3xl font-bold my-5">DigiTools </h2>
          <p className="text-gray-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="flex justify-around flex-2 max-sm:flex-col gap-3 max-sm:items-center space-y-6">
          <ul className="space-y-3.5">
            <h5 className="text-2xl font-semibold ">Product</h5>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>

          <ul className="space-y-3.5">
            <h5 className="text-2xl font-semibold ">Company</h5>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul className="space-y-3.5">
            <h5 className="text-2xl font-semibold ">Resources</h5>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex-1 max-w-350 mx-auto text-center ">
          <h4 className="text-2xl font-bold">Social Links</h4>
          <div className="flex gap-3 mx-auto justify-center my-5">
            <span className="  text-4xl">
              <FaInstagramSquare />
            </span>
            <span className="  text-4xl">
              <FaFacebookSquare />
            </span>
            <span className="  text-4xl">
              <FaSquareXTwitter />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
