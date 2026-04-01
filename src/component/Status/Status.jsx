import React from 'react';

const Status = () => {
  return (
    <div className='w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-10 my-4'>
      <div className=" max-w-350 px-5 mx-auto flex justify-around gap-3 my-8 text-white ">

        <div>
        <h4 className='text-5xl font-bold'>50K+</h4>
        <p >Active Users</p>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div>
        <h4 className='text-5xl font-bold'>200+</h4>
        <p>Premium Tools</p>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div>
        <h4 className='text-5xl font-bold'>4.9</h4>
        <p>Rating</p>
      </div>

      </div>
    </div>
  );
};

export default Status;