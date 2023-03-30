import React from "react";
import hero1 from "./profile.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] text-black text-xl px-8 py-4">
      <div className="flex flex-col flex-wrap place-content-center space-y-8">
        <h1 className="text-4xl flex md:align-center">
          Hello! My name is Lucky, and I am a front end developer!
        </h1>
        <p className="mx-12">
          I am a Canadian citizen, and in my current role at Skillify, a Toronto
          based startup that provides digital media literacy coaching, I have
          built React games, a coaching dashboard and interactive educational
          web development content. I graduated from the University of Waterloo
          in 2021 as an Actuarial Science major and transitioned into software
          engineering in 2022. I have a keen eye for design, and I enjoy
          learning new tools and frameworks. I have experience developing with
          TypeScript, React, Redux, TailwindCSS, Jest, and GraphQL.
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
