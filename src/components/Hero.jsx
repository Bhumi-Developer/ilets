import React from "react";
import heroimage from "../assets/hero-image.png";
import card1 from "../assets/study1.jpeg";
import card2 from "../assets/study2.jpeg";
import card3 from "../assets/study3.jpeg";
import card4 from "../assets/study4.jpeg";
import profile from "../assets/dp.jpeg";

const Hero = () => {
  return (
    <>
      <div
        className="w-full h-[700px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-85"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-blue-400 text-3xl md:text-6xl font-bold">
            Improve Your English Skills with the Best IELTS Institute
          </h1>
          <p className="text-white mt-4 text-lg md:text-2xl max-w-2xl">
            Welcome to the Best IELTS Institute! Enhance your English language
            skills with expert guidance and professional support.
          </p>
          <button className="mt-6 px-8 py-3 border-2 border-white text-white rounded-md hover:bg-blue-900">
            Join Now
          </button>
          <p className="mt-10 text-gray-500">
            ⭐⭐⭐⭐⭐ | Professional Guidance | Tailored Support
          </p>
        </div>
      </div>

      <div className="bg-blue-200  w-full py-10 px-5">
        <h1 className="text-black text-5xl text-center pt-10">
          Enhance your English Skills
        </h1>
        <p className="text-black text-2xl text-center pt-5 pb-10">
          Professional guidance for improving your English language skills.
        </p>
        <div className="flex gap-6 items-center justify-center flex-wrap m-2">
          <div className="border-white border-4 bg-white text-black p-2 rounded-xl">
            <img src={card1} className="h-[300px] w-[300px] rounded-md" />
            <p className="text-xl font-bold p-1">AI Band Score</p>
            <p className="w-[290px]">
              Get accurate AI band scores to track your progress.
            </p>
          </div>
          <div className="border-white border-4 bg-white text-black p-2 rounded-xl">
            <img src={card2} className="h-[300px] w-[300px] rounded-md" />
            <p className="text-xl font-bold p-1">Speaking Practice</p>
            <p className="w-[290px]">
              Enhance your speaking skills through dedicated practice sessions.
            </p>
          </div>
          <div className="border-white border-4 bg-white text-black p-2 rounded-xl">
            <img src={card3} className="h-[300px] w-[300px] rounded-md" />
            <p className="text-xl font-bold p-1">Mock Tests</p>
            <p className="w-[290px]">
              Prepare effectively with mock tests to boost your confidence.
            </p>
          </div>
          <div className="border-white border-4 bg-white text-black p-2 rounded-xl">
            <img src={card4} className="h-[300px] w-[300px] rounded-md" />
            <p className="text-xl font-bold p-1">Expert Guidance</p>
            <p className="w-[290px]">
              Receive expert guidance and support tailored to your learning
              needs.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 py-24 p-10">
        <p className="text-3xl md:text-5xl font-bold text-black text-center">
          "The institute's guidance has helped me excel in my English language
          proficiency."
        </p>
        <div className="flex items-center justify-center text-black gap-6 mt-10">
        <img src={profile} className="h-14 w-14 rounded-4xl object-cover text-center"/>
        <p className="text-white text-2xl">Neeti Chauhan</p>
        </div>
      </div>
      <div className="bg-blue-200 text-black">
          <div className="border-blue-500  border-2 py-28 ">
              <p className="text-5xl font-bold text-center pb-10">Join Now and Boost Your English Skills.</p>
              <p className="text-3xl text-center">“Joining the IELTS Institute was a game-changer for me. Not only did it enhance my English skills, but it also prepared me effectively for the IELTS exam.” - Henry Nelson</p>
          </div>
      </div>

    </>
  );
};
export default Hero;
