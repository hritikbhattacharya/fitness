import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";
import About from "./About";
import { useNavigate } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import Footer from "./footer";

const Home = () => {
  const navigate = useNavigate();

  // scroll effect for navbar-------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelector(".scroll-text");
      if (window.scrollY > 700) {
        text.classList.add("scroll-color");
      } else {
        text.classList.remove("scroll-color");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // joyride step states---------------------------------------------------------------------------------------------------
  const [{ run, steps }] = useState({
    run: true,
    steps: [
      {
        target: "body",
        content: "Welcome to our page",
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
      },
      {
        target: ".step1",
        content: "This is our landing page",
        placement: "top",
      },
      {
        target: ".step2",
        content: "Here is a brief description about us",
        placement: "top",
      },
      {
        target: ".step3",
        content: "Plans we offer for you",
        placement: "top",
      },
      {
        target: ".step4",
        content: "Click to get a personalized plan for you, for free",
        placement: "top",
      },
    ],
  });

  // navigation function---------------------------------------------------------------------------------------------------------------
  const handleClick = () => {
    navigate("/service");
  };

  // main return function------------------------------------------------------------------------------------------------------
  return (
    <div>
      {/* navbar */}
      <div className="flex justify-between items-center fixed top-0 text-white w-full p-3 bg-inherit scroll-text">
        <div className="text-4xl font-bold  ml-3 my-first-step">LOGO</div>
        <div className="flex justify-evenly items-center text-2xl font-semibold ">
          <a className=" m-2 hover:text-yellow-300 " href="/">
            Home
          </a>
          <a className=" m-2 hover:text-yellow-300" href="/">
            About
          </a>
          <button className=" m-2 hover:text-yellow-300">Login</button>
          <button className=" m-2 hover:text-yellow-300">Signup</button>
        </div>
      </div>

      {/* Hero section */}
      <div className=" h-[100vh] hero step1 ">
        <div className="flex justify-center tt items-center flex-col p-5 h-[100vh]">
          <p className=" text-7xl font-bold text-white ">
            HEALTH AND FITNESS WELLBEING{" "}
          </p>
          <p className="text-2xl font-medium text-white my-4">
            WE PROVIDE PERSONALIZE FITNESS PLAN FOR ALL AGE GROUP
          </p>

          <button
            onClick={handleClick}
            className=" h-auto p-3 m-2 bg-white text-black font-semibold rounded hover:bg-blue-300 step4"
          >
            Try Our Service
          </button>
        </div>
      </div>
      <div className="step2">
        <About />
      </div>
      <div className="step3">
        <ServicesCard />
      </div>
      <Footer />

      {/* Joyride component */}
      <Joyride
        callback={() => {}}
        steps={steps}
        run={run}
        showProgress
        showSkipButton
        continuous
        scrollToFirstStep
        hideCloseButton
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#e3ffeb",
            primaryColor: "#000",
            textColor: "#004a14",
            fontSize: 15,
            weight: 1000,
            width: 400,
            zIndex: 1000,
          },
        }}
      />
    </div>
  );
};

export default Home;
