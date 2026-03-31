import React, { useState } from "react";

const Card = ({ data, selected, setSelected, setCount }) => {
  const [isClicked, setIsClicked] = useState(false)

  const ClickedBtn = ()=>{
    setIsClicked(true)
    setSelected([...selected, data])
    setCount(selected.length + 1)
    // console.log(data)
  }

  return (
    <div >
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body relative">
          <span className="badge  badge-warning absolute right-6">
            {data.tag === "" ? "No Tag" : data.tag}
          </span>

          <span className="text-5xl mt-8 ">{data.icon}</span>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold mt-7">{data.name}</h2>
            <p className="text-gray-500">{data.description}</p>
            <p>
              <span className="text-3xl font-bold">{data.price}</span>
              /month{" "}
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-500">
            {/* {data.features.map((res) => {
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{res}</span>
              </li>;
            })} */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
          </ul>

          <div className="mt-6">
            <button 
            disabled = {isClicked  ? true : false}
            onClick={()=> ClickedBtn()}
            className={isClicked == true ? 'btn-block btn rounded-full' :"btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white btn-block rounded-full"}>
              {isClicked == true ? 'Added to cart' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
