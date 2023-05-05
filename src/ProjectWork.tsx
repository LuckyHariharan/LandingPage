import React from "react";
import coachingDashboardImg from "./coaching.png";
import personalityQuizImg from "./PQ.png";
import reactQuizzesImg from "./ap.png";

const ProjectWork: React.FC = () => {
  return (
    <div id="ProjectWork" className="py-20 text-black">
      <h1 className="text-5xl md:text-6xl flex justify-center">Project Work</h1>

      <div className="px-4 py-8 lg:px-40 md:px-40 grid grid-cols-1 xl:grid-cols-[1fr_100px_1fr] text-2xl items-center place-content-center ">
        <img
          src={coachingDashboardImg}
          className="border-4"
          alt="Coaching Dashboard"
        />
        <div></div>

        <p className="">
          Developed a coaching dashboard to allow Skillify coaches to view every
          student's progress at a glance. The tech stack includes TypeScript,
          React, Tailwind CSS, Redux, and Jest for unit testing.
        </p>
        <img
          src={personalityQuizImg}
          className="border-4"
          alt="Personality Quiz"
        />
        <div></div>

        <p className="">
          Developed a personality quiz to help users discover their ideal coding
          career, language, etc. The quiz saves user preferences and returns the
          result. The tech stack includes TypeScript, React, Tailwind CSS, and
          Jest for unit testing.
        </p>

        <img src={reactQuizzesImg} className="border-4" alt="React Quizzes" />
        <div></div>

        <p className="">
          Scoped and created React games for students learning thier
          multiplication tables. The games are designed to be engaging for users
          and the tech stack includes TypeScript, React, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ProjectWork;
