import React from "react";
import heroimage from "../assets/hero-image.png";
import card1 from "../assets/study1.jpeg";
import card2 from "../assets/study2.jpeg";
import card3 from "../assets/study3.jpeg";
import card4 from "../assets/study4.jpeg";
import profile from "../assets/dp.jpeg";
import Testimonials from "./testimonials";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-[700px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Improve Your English Skills with the Best IELTS Institute
          </h1>
          <p className="text-gray-200 mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl">
            Welcome to the Best IELTS Institute! Enhance your English language
            skills with expert guidance and professional support.
          </p>
          <button className="mt-8 px-8 py-3 border-2 border-white text-white rounded-md hover:bg-primary hover:border-primary transition-all duration-300 transform hover:scale-105">
            Join Now
          </button>
          <p className="mt-10 text-gray-400 text-sm sm:text-base">
            ⭐⭐⭐⭐⭐ | Professional Guidance | Tailored Support
          </p>
        </div>
      </div>

      <div className="bg-accent dark:bg-gray-900 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-gray-800 dark:text-white text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          Enhance your English Skills
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl md:text-2xl text-center pt-5 pb-12">
          Professional guidance for improving your English language skills.
        </p>
        <div className="flex gap-8 items-center justify-center flex-wrap">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-xl shadow-lg w-full sm:w-[320px]">
            <img src={card1} className="h-[200px] w-full object-cover rounded-md" />
            <p className="text-xl font-bold p-2">AI Band Score</p>
            <p className="px-2 pb-2">
              Get accurate AI band scores to track your progress.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-xl shadow-lg w-full sm:w-[320px]">
            <img src={card2} className="h-[200px] w-full object-cover rounded-md" />
            <p className="text-xl font-bold p-2">Speaking Practice</p>
            <p className="px-2 pb-2">
              Enhance your speaking skills through dedicated practice sessions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-xl shadow-lg w-full sm:w-[320px]">
            <img src={card3} className="h-[200px] w-full object-cover rounded-md" />
            <p className="text-xl font-bold p-2">Mock Tests</p>
            <p className="px-2 pb-2">
              Prepare effectively with mock tests to boost your confidence.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-xl shadow-lg w-full sm:w-[320px]">
            <img src={card4} className="h-[200px] w-full object-cover rounded-md" />
            <p className="text-xl font-bold p-2">Expert Guidance</p>
            <p className="px-2 pb-2">
              Receive expert guidance and support tailored to your learning
              needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-accent dark:bg-gray-900 text-gray-800 dark:text-white">
       <Testimonials />
      </div>
    </>
  );
};

export default Hero;
