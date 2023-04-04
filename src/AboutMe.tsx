import React from "react";
import hero1 from "./profile.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 place-items-center py-4 md:grid-cols-[3fr_5fr] text-black  px-8 ">
      <img
        alt=""
        className=" md:w-2/3  mr-4 w-40  border-4 border-gray-400"
        src={hero1}
      />{" "}
      <div className="flex flex-col place-content-center space-y-8">
        <p className="m-6 md:mr-22 text-xl md:text-3xl leading-normal md:leading-relaxed">
          Lucky is a frontend developer at{" "}
          <a href="https://www.skillify.ca" className="text-blue-600 underline">
            Skillify
          </a>{" "}
          Meet Lucky, a frontend developer at Skillify, a Toronto-based startup
          that offers digital media literacy coaching. Lucky completed an
          Actuarial Science degree at the University of Waterloo in 2021.
          However, in 2022, Lucky decided to pivot towards frontend development.
          Lucky has since gained valuable experience in this field, as well as
          learned Kotlin and mobile development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
