import React from "react";

function ProjectWork() {
  return (
    <div id="ProjectWork" className="py-20 text-black:">
      <h1 className="text-4xl flex justify-center">ProjectWork</h1>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="text-2xl text-center">Coaching Dashboard</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
            <div className="col-span-1"></div>
            <p className="col-span-5">
              Developed a coaching dashboard to allow Skillify coaches to view
              every student's progress at a glance. The tech stack includes:
              TypeScript, React, Tailwind CSS, Redux, and Jest for unit testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWork;
