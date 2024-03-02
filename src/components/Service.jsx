import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Service = () => {
  // States to store the user response---------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data to be stored in the json file---------------------------------------------------------------------------------------
  const data = {
    name,
    height,
    weight,
    goal,
    fitnessLevel,
    activityLevel,
  };

  // Function to store the response ot the user to the json file in the server--------------------------------------------------
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/saveData", data);
      toast.success("Data saved successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save data");
    }
  };

  // Function to move to the next slide---------------------------------------------------------------------------------------
  const next = () => setCurrentSlide((prevSlide) => prevSlide + 1);
  const updateCurrentSlide = (index) => setCurrentSlide(index);

  // Return statement---------------------------------------------------------------------------------------------------------
  return (
    <div className="h-[100vh] w-full p-28 flex flex-col justify-center items-center bg-white">
      <p className="text-5xl m-3 font-extrabold">FILL THE DETAILS</p>
      <Carousel
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        showThumbs={false}
        showArrows={false}
      >
        {/* Personal info */}
        <div className=" w-full h-[70vh] flex flex-col justify-center items-center bg-blue-300 rounded-lg ">
          <p className=" m-3 text-2xl font-bold">GENERAL INFO</p>
          <label className=" font-medium" htmlFor="">
            Full Name
          </label>
          <input
            className="w-72 p-2 m-2 rounded"
            value={name}
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className=" font-medium" htmlFor="">
            Height
          </label>
          <input
            className="w-72 p-2 m-2 rounded"
            value={height}
            type="text"
            placeholder="Enter Height (in cm)"
            onChange={(e) => setHeight(e.target.value)}
          />
          <label className=" font-medium" htmlFor="">
            Weight
          </label>
          <input
            className="w-72 p-2 m-2 rounded"
            value={weight}
            type="text"
            placeholder="Enter Weight (in kg)"
            onChange={(e) => setWeight(e.target.value)}
          />
          <label className=" font-medium" htmlFor="">
            Gender
          </label>
          <input
            className="w-72 p-2 m-2 rounded"
            value={gender}
            type="text"
            placeholder="Enter Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {/* Question 1 */}
        <div className=" w-full h-[70vh] flex flex-col justify-center items-center bg-blue-300 rounded-lg ">
          <p className="text-3xl font-semibold m-3 ">
            Tell us about your body goals
          </p>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setGoal("Gain Weight");
              next();
            }}
          >
            Gain Weight
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setGoal("Lose Weight");
              next();
            }}
          >
            Lose Weight
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setGoal("Make abs");
              next();
            }}
          >
            Make abs
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setGoal("Build Muscles");
              next();
            }}
          >
            Build Muscles
          </button>
          <button
            className="h-auto w-72  p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setGoal("Improve General Fitness ");
              next();
            }}
          >
            Improve General Fitness
          </button>
        </div>
        {/* Question 2 */}
        <div className=" w-full h-[70vh] flex flex-col justify-center items-center bg-blue-300 rounded-lg">
          <p className="text-3xl font-semibold m-3 ">
            Whats tour fitness level?
          </p>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setFitnessLevel("Beginner");
              next();
            }}
          >
            Beginner
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setFitnessLevel("Intermediate");
              next();
            }}
          >
            Intermediate
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setFitnessLevel("Advance");
              next();
            }}
          >
            Advance
          </button>
        </div>
        {/* Question 3 */}
        <div className=" w-full h-[70vh] flex flex-col justify-center items-center bg-blue-300 rounded-lg">
          <p className="text-3xl font-semibold m-3 ">How active are you?</p>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setActivityLevel("Sedentary");
              next();
            }}
          >
            Sedentary
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setActivityLevel("Lightly Active");
              next();
            }}
          >
            Lightly Active
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setActivityLevel("Moderately");
              next();
            }}
          >
            Moderately
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500"
            onClick={() => {
              setActivityLevel("Very Active");
              next();
            }}
          >
            Very active
          </button>
          <button
            className="h-auto w-72 p-1 m-2 rounded-lg bg-white hover:bg-blue-500 "
            onClick={() => {
              setActivityLevel("Super Active");
              next();
            }}
          >
            Super active
          </button>
        </div>
        {/* Thank you section*/}
        <div className="w-full h-[70vh] flex flex-col justify-center items-center bg-blue-300 rounded-lg">
          <p className="text-3xl font-semibold">Thank you for your response</p>
          <p className="text-3xl font-semibold">
            Click on the submit button to get the plan
          </p>
        </div>
      </Carousel>

      <div className="flex justify-center items-center m-4">
        {currentSlide === 4 ? (
          <button
            onClick={handleSubmit}
            className="h-auto w-24 p-2 m-2 text-white bg-black font-semibold rounded"
          >
            Submit
          </button>
        ) : (
          <button
            className="h-auto w-24 p-2 m-2 text-white bg-black font-semibold rounded"
            onClick={next}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Service;
