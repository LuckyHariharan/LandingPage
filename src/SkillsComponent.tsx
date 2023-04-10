import React from "react";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import donating from "./person-donating.png";
import reactpng from "./REACTPNG.png";
import coaching from "./coaching.png";
import AlienPathway from "./ap.png";
import JavaScriptpng from "./javascriptwebp.webp";
import tailwindcsspng from "./tailwindcss.png";
import htmlpng from "./hmlt5png.png";
import TypeScriptpng from "./typescriptpng.png";
import css from "./CSSPNG.png";
import kotlin from "./Kotlin.jpg";
import graphql from "./graphql.jpg";
import nextjspng from "./NextJSPNG.png";
import agilepng from "./agilepng.png";
import pythonpng from "./pythonpng.png";
import git from "./git.png";
import jest from "./JESTWEBP.webp";
import redux from "./Reduxpng.png";
import R from "./RPNG.png";
import VBA from "./vba.png";
import submit from "./submit.png";
const SkillsComponent = () => {
  return (
    <div
      id="Skills"
      className="text-black border-4 bg-white py-12 flex flex-col justify-center place-items-center"
    >
      <h1 className="text-6xl">Skills</h1>
      <div className="text-white  grid grid-cols-3 md:grid-cols-6 text-xl space-y-12 space-x-4 justify-items-center ">
        <div>
          <img
            className="h-16 w-full md:h-28 ml-4 mt-12"
            src={reactpng}
            alt=""
          />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" src={TypeScriptpng} alt="" />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={JavaScriptpng} />
        </div>

        <img className="h-16 w-full md:h-28" alt="" src={kotlin} />
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={pythonpng} />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={tailwindcsspng} />
        </div>

        <div>
          <img className="h-16 w-full md:h-28" alt="" src={htmlpng} />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={css} />
        </div>
        <div>
          <img className="h-16  md:h-32 mb-0 md:mb-8" alt="" src={graphql} />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={nextjspng} />
        </div>
        <div>
          <img className="h-16 w-full md:h-28" alt="" src={agilepng} />
        </div>

        <div>
          <img className="h-16 w-full md:h-28" alt="" src={git} />
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
