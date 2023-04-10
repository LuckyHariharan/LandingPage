import React from "react";
import coachingDashboardImg from "./coaching.png";
import personalityQuizImg from "./PQ.png";
import reactQuizzesImg from "./ap.png";

const ProjectWork: React.FC = () => {
  return (
    <div id="project-work" className="py-20 text-black">
      <h1 className="text-4xl flex justify-center">Project Work</h1>
      <h2 className="text-2xl text-center">Coaching Dashboard</h2>

      <div className="px-4 py-8 lg:px-40 md:px-40 grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] text-2xl items-center place-content-center ">
        <img src={coachingDashboardImg} alt="Coaching Dashboard" />
        <div></div>

        <p className="">
          Developed a coaching dashboard to allow Skillify coaches to view every
          student's progress at a glance. The tech stack includes TypeScript,
          React, Tailwind CSS, Redux, and Jest for unit testing.
        </p>
        <img src={personalityQuizImg} alt="Personality Quiz" />
        <div></div>

        <p className="">
          Developed a personality quiz to help users discover their ideal coding
          career, language, etc. The quiz saves user preferences and returns the
          result. The tech stack includes TypeScript, React, Tailwind CSS, and
          Jest for unit testing.
        </p>

        <img src={reactQuizzesImg} alt="React Quizzes" />
        <div></div>

        <p className="">
          Created technical designs for React quizzes to serve as marketing
          material. The quizzes are designed to be engaging and informative for
          users. The tech stack includes TypeScript, React, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ProjectWork;
