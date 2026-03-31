import React from "react";

const UpFooter = () => {
  return (
    <div>
      <div className="w-full py-15 my-4  text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Ready to Transform Your Workflow?</h3>
          <p className="text-gray-100">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>
          <div className=" space-x-3">
            <button className=" btn rounded-full w-40">Explore Product </button>
            <button className="btn btn-outline rounded-full w-40"> View Pricing </button>
          </div>
          <p className="text-gray-100">
            14-day free trial  No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpFooter;