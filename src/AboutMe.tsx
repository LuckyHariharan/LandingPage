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
          I'm Lucky, a frontend engineer at
          <a href="https://www.skillify.ca" className="text-blue-600 underline">
            Skillify
          </a>{" "}
          a Toronto-based startup that offers digital media literacy coaching.
          In 2021 I earned an Actuarial Science degree at the University of
          Waterloo and later next year I decided to pivot towards frontend
          development. In addition to gaining valuable experience in this field,
          I am learning Kotlin and mobile development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
