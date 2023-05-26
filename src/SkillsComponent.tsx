import reactpng from "./REACTPNG.png";
import JavaScriptpng from "./javascriptwebp.webp";
import htmlpng from "./hmlt5png.png";
import TypeScriptpng from "./typescriptpng.png";
import css from "./CSSPNG.png";
import kotlin from "./Kotlin.jpg";
import graphql from "./graphql.jpg";
import nextjspng from "./NextJSPNG.png";
import agilepng from "./agilepng.png";
import git from "./git.png";
const SkillsComponent = () => {
  return (
    <div
      id="Skills"
      className="text-black border-4 bg-white py-4 flex flex-col justify-center place-items-center"
    >
      <h1 className="text-5xl md:text-6xl ">Skills</h1>
      <div className="text-white  grid grid-cols-2 sm:grid-cols-5 text-xl space-y-8 space-x-2 md:space-x-4 justify-items-center ">
        <div>
          <img
            className="h-20 w-full mt-8 md:h-28"
            src={TypeScriptpng}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-20 w-20 md:w-28 md:h-28 mr-0 md:mr-8"
            alt=""
            src={JavaScriptpng}
          />
        </div>{" "}
        <div>
          <img className="h-20 md:h-28 mr-4" alt="" src={htmlpng} />
        </div>
        <div>
          <img className="h-20 md:h-28 " alt="" src={css} />
        </div>{" "}
        <div>
          <img className="h-20  md:h-28 mr-4" alt="" src={git} />
        </div>
        <div>
          <img className="h-20 w-full md:h-28" alt="" src={kotlin} />
        </div>
        <div>
          <img className="h-24  md:h-32 mr-0 md:mr-6" src={reactpng} alt="" />
        </div>
        <div>
          <img
            className="h-20  md:h-32 mb-0 md:mb-4 mt-2 mr-4"
            alt=""
            src={graphql}
          />
        </div>
        <div>
          <img className="h-20 w-full md:h-28" alt="" src={nextjspng} />
        </div>
        <div>
          <img className="h-20 w-full md:h-28" alt="" src={agilepng} />
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
