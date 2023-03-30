import React from "react";
import hero1 from "./image.jpg";

const AboutMe = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-[3fr_2fr] text-black text-xl p-8 ">
      <div className="flex flex-col flex-wrap place-content-center ">
        <h1 className="text-4xl flex md:align-center  ">
          Hello! My name is Lucky, and I am a front end developer!
        </h1>
        <p className="">
          In my current role at Skillify, a Toronto based startup that provides
          digital media literacy coaching, I have built React games, a coaching
          dashboard and interactive educational web development content. I
          graduated from the University of Waterloo in 2021 as an Actuarial
          Science major and transitioned into software engineering in 2022. I
          have a keen eye for design, and I enjoy learning new tools and
          frameworks. I have experience developing with TypeScript, React,
          Redux, TailwindCSS, Jest, and GraphQL.
        </p>{" "}
      </div>
      <img alt="" className="md:h-100 w-full md:mt-20 " src={hero1}></img>
    </div>
  );
};

export default AboutMe;
