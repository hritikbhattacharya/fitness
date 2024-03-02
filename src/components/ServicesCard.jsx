import React from "react";

const ServicesCard = () => {
  return (
    <div className="h-[80vh] w-full p-28 flex flex-col justify-center items-center ">
      <p className="text-6xl font-bold mb-4">SERVICES WE PROVIDE</p>
      <div className=" flex justify-center items-center h-[60vh] w-full rounded-md font-semibold">
        <div className=" border h-56 w-64  m-5 flex flex-col justify-start items-center shadow-xl rounded-md">
          <img
            className=" h-48 w-full rounded-md"
            src="fitnessPlan.jpeg"
            alt=""
          />
          <p className=" m-2"> FITNESS PLAN</p>
        </div>
        <div className=" border h-56 w-64 m-5 flex flex-col justify-start items-center shadow-xl rounded-md">
          <img className=" h-48 w-full rounded-md" src="dietPlan.jpeg" alt="" />
          <p className=" m-2"> DIET PLAN</p>
        </div>
        <div className=" border h-56 w-64 m-5 flex flex-col justify-start items-center shadow-xl rounded-md">
          <img
            className=" h-48 w-full rounded-md"
            src="healthPlan.jpeg"
            alt=""
          />
          <p className=" m-2"> COMBO PLAN</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
