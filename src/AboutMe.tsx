import React from "react";
import hero1 from "./profile.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 py-4 md:grid-cols-[3fr_5fr] text-black text-xl px-8 ">
      <img
        alt=""
        className=" w-2/3 ml-16  border-4 border-gray-400"
        src={hero1}
      />{" "}
      <div className="flex flex-col place-content-center space-y-8">
        <p className="mr-24 text-3xl leading-relaxed">
          I am a frontend software developer at{" "}
          <a href="https://www.skillify.ca" className="text-blue-600 underline">
            Skillify
          </a>
          , a Toronto based startup that provides digital media literacy
          coaching. I graduated from the University of Waterloo in 2021 as an
          Actuarial Science major and in 2022 transitioned actuarial work into
          development. I am also learning Kotlin and mobile development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
