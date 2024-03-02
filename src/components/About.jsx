import React from "react";

const About = () => {
  return (
    <div className="h-[80vh] w-full p-28 flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center p-4 mb-5 ">
        <p className="text-7xl font-bold">ABOUT US</p>
      </div>
      <div className=" border flex  justify-evenly items-center h-[60vh] rounded-md shadow-xl bg-slate-100">
        <img className=" h-96 w-1/2" src="healthPlan.jpeg" alt="" />
        <div className=" flex justify-center items-center p-7 w-1/2">
          <p className=" text-center text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            perspiciatis aut culpa assumenda possimus quae, aliquam maxime velit
            obcaecati id ipsam vel, saepe, commodi et expedita ut. Amet, iusto
            nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
