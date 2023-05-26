import React from "react";
import coachingDashboardImg from "./coaching.png";
import personalityQuizImg from "./PQ.png";
import reactQuizzesImg from "./ap.png";

const ProjectWork: React.FC = () => {
  return (
    <div
      id="ProjectWork"
      className="bg-[url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=forma)] py-20 text-black"
    >
      <h1 className="text-5xl md:text-6xl flex justify-center">Project Work</h1>

      <div className=" px-4 py-8 space-y-4 lg:px-40 md:px-40 grid grid-cols-1 xl:grid-cols-[1fr_100px_1fr] text-2xl items-center place-content-center ">
        <a href="https://www.skillify.ca" className="text-blue-600 underline">
          <img
            src={coachingDashboardImg}
            className="border-4 hover:opacity-75"
            alt="Coaching Dashboard"
          />{" "}
        </a>{" "}
        <div></div>
        <p className="">
          Developed a coaching dashboard to allow Skillify coaches to view every
          student's progress at a glance. The tech stack includes TypeScript,
          React, Tailwind CSS, Redux, and Jest for unit testing.
        </p>{" "}
        <a href="https://www.skillify.ca" className="text-blue-600 underline">
          <img
            src={personalityQuizImg}
            className="border-4 hover:opacity-75"
            alt="Personality Quiz"
          />
        </a>{" "}
        <div></div>
        <p className="">
          Developed a personality quiz to help users discover their ideal coding
          career, language, etc. The quiz saves user preferences and returns the
          result. The tech stack includes TypeScript, React, Tailwind CSS, and
          Jest for unit testing.
        </p>
        <a href="https://www.skillify.ca" className="text-blue-600 underline">
          <img
            src={reactQuizzesImg}
            className="border-4 hover:opacity-75"
            alt="React Quizzes"
          />{" "}
        </a>{" "}
        <div></div>
        <p className="">
          Scoped and created React games for students learning their
          multiplication tables. The games are designed to be engaging for users
          and the tech stack includes TypeScript, React, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ProjectWork;
