import React from "react";
import hero1 from "./profile.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] text-black text-xl px-8 ">
      <div className="flex flex-col flex-wrap place-content-center space-y-8">
        <h1 className="text-4xl flex md:align-center">Hello, I'm Lucky!</h1>
        <p className="mx-12">
          In my current role as frontend engineer at Skillify, a Toronto based
          startup that provides digital media literacy coaching I.... I
          graduated from the University of Waterloo in 2021 as an Actuarial
          Science major and in 2022 I transitioned from an actuarial analyst
          role at a life insurer into a frontend software engineer. I am an
          eager collaborator and thrive in time sensitive settings.
        </p>
      </div>
      <img
        alt=""
        className=" w-full md:mt-20  border-4 border-gray-400"
        src={hero1}
      />
    </div>
  );
};

export default AboutMe;
