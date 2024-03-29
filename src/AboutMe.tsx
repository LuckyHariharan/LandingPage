import React from "react";
import hero1 from "./profile.jpg";
import linkedin from "./assets/linkedin.svg";
const AboutMe = () => {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=forma)] grid grid-cols-1 place-items-center py-4 md:grid-cols-2 text-black ">
      <p className="md:hidden py-4 px-8 md:mr-22 text-2xl md:text-3xl leading-normal md:leading-relaxed">
        Software Developer with 2+ years of experience with TypeScript, Kotlin,
        and Python.{" "}
        {/* <a href="https://www.skillify.ca" className="text-blue-600 underline">
          Skillify
        </a>{" "} */}
      </p>{" "}
      <p className="hidden md:block xl:text-3xl py-4 px-8 md:text-lg md:mr-22 text-2xl md:text-3xl lg:text-lg leading-normal md:leading-relaxed">
        I'm Lucky, a frontend engineer at{" "}
        <a href="https://www.skillify.ca" className="text-blue-600 underline">
          Skillify
        </a>{" "}
        a Toronto-based startup that offers digital media literacy coaching. In
        2021, I earned an Actuarial Science degree from the University of
        Waterloo and decided later next year to pivot towards software
        development. In addition to gaining valuable experience in this field, I
        am learning Kotlin and mobile development.
      </p>{" "}
      <div className="space-y-4 grid place-items-center">
        <img
          alt=""
          className=" md:h-full md:w-2/3 w-1/2 max-h-100  border-4 border-gray-400 lg:w-2/5 "
          src={hero1}
        />{" "}
        <div className="flex  md:space-x-12 space-x-8   place-content-center md:place-content-start md:py-0   md:px-20 ">
          <a
            href="https://www.linkedin.com/in/lakshman-hariharan/"
            className="hover:scale-105 transform transition-transform duration-300 "
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://drive.google.com/file/d/1dPEBmKfvEZWuffhXRhPfQh9iT_D4zs_N/view?usp=sharing"
            className=" hover:scale-105 transform transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="52"
              height="52"
            >
              <path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z" />
              <path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />
              <path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z" />
            </svg>
          </a>
          <a
            href="https://github.com/LuckyHariharan"
            className=" hover:scale-105 transform transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col place-content-center space-y-8 md:space-y-4"></div>
    </div>
  );
};

export default AboutMe;
