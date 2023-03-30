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
import graphqlpng from "./graphql.png";
import nextjspng from "./NextJSPNG.png";
import agilepng from "./agilepng.png";
import pythonpng from "./pythonpng.png";
import git from "./git.png";
import jest from "./JESTWEBP.webp";
import redux from "./Reduxpng.png";
import R from "./RPNG.png";
import VBA from "./vba.png";
import submit from "./submit.png";
const Skills = () => {
  return (
    <div
      id="skills"
      className="text-black bg-white py-12 flex flex-col justify-center place-items-center"
    >
      <h1 className="text-4xl">SKILLS</h1>
      <div className="text-white  grid grid-cols-3 md:grid-cols-5 sm:grid-col:2 text-xl space-y-12 space-x-8 justify-items-center ">
        <div>
          <img className="h-20 w-full ml-4 mt-12" src={reactpng} alt="" />
        </div>
        <div>
          <img className="h-20 w-full" src={TypeScriptpng} alt="" />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={JavaScriptpng} />
        </div>

        <img className="h-20 w-40" alt="" src={kotlin} />

        <div>
          <img className="h-20 w-full" alt="" src={tailwindcsspng} />
        </div>

        <div>
          <img className="h-20 w-full" alt="" src={htmlpng} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={css} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={graphqlpng} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={nextjspng} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={agilepng} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={pythonpng} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={git} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={jest} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={R} />
        </div>
        <div>
          <img className="h-20 w-full" alt="" src={VBA} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
