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
function App() {
  return (
    <div className=" text-slate-700">
      <nav className="px-2 border-gray-200 bg-gradient-to-r from-violet-900 to-indigo-900">
        <div className="mr-0 md:mr-24 flex flex-wrap justify-center md:justify-center mx-auto">
          <img
            src={donating}
            className="h-0 sm:h-24 mr-3 xl"
            alt="Flowbite Logo"
          />
          <div className="flex sm:justify-center justify-end flex-col">
            <div className="flex flex-row space-x-4">
              <span className="text-4xl  font-semibold text-center dark:text-white">
                Lakshman 'Lucky' Hariharan
              </span>
            </div>
            <p className="flex justify-center text-2xl text-white px-4">
              Front End Software Engineer
            </p>
            <div className="flex border-2 justify-center text-white space-x-8">
              <a
                className="hover:animate-pulse"
                href="https://drive.google.com/file/d/1C8IPbbJYd0bSmS4AV-Oj2f3ByhL_Q3VY/view?usp=sharing"
              >
                Resume
              </a>
              <a
                className="hover:animate-pulse"
                href="https://github.com/LuckyHariharan"
              >
                GitHub
              </a>
              <a
                className="hover:animate-pulse"
                href="https://www.linkedin.com/in/lakshman-hariharan"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:hidden w-full text-lg" id="navbar-multi-level">
            <ul className="flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0">
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="about"
        className=" w-full h-4 text-lg text-white space-y-4  bg-gradient-to-r from-violet-600 to-indigo-900  "
      >
        {/* <a href="mailto:lharihar@uwaterloo.ca">Email</a> */}

        {/* // Nav bar to navigate through portfolio pieces */}

        <div className="grid  grid-cols-1 md:grid-cols-[3fr_2fr] text-white text-xl p-8  bg-gradient-to-r from-violet-500 to-indigo-900 ">
          <div className="flex flex-col flex-wrap place-content-center ">
            <h1 className="text-4xl flex md:align-center  ">
              Hello! My name is Lucky, and I am a front end developer!
            </h1>
            <p className="">
              In my current role at Skillify, a Toronto based startup that
              provides digital media literacy coaching, I have built React
              games, a coaching dashboard and interactive educational web
              development content. I graduated from the University of Waterloo
              in 2021 as an Actuarial Science major and transitioned into
              software engineering in 2022. I have a keen eye for design, and I
              enjoy learning new tools and frameworks. I have experience
              developing with TypeScript, React, Redux, TailwindCSS, Jest, and
              GraphQL.
            </p>{" "}
          </div>
          <img alt="" className="md:h-100 w-full md:mt-20 " src={hero1}></img>
        </div>
      </div>

      <div
        id="projects"
        className=" py-20 text-white items-center bg-gradient-to-r from-violet-500 to-indigo-900 "
      >
        <h1 className="text-4xl flex justify-center">PROJECTS</h1>
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="text-2xl text-center">Coaching Dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
              <div className="col-span-1"></div>
              <p className="col-span-5">
                Developed a coaching dashboard to allow Skillify coaches to view
                every student's progress at a glance. The tech stack includes:
                TypeScript, React, Tailwind CSS, Redux, and Jest for unit
                testing.
              </p>
              <img
                src={coaching}
                alt=""
                className="w-full h-80 object-cover rounded-lg col-span-4"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="text-2xl text-center">React Games</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
              <div className="col-span-1"></div>
              <p className="col-span-5">
                Fully scoped and built an Alien Pathway board game where
                students practice mental math to create a path. Front-end:
                React, TypeScript; Back-end: Next.js.
              </p>
              <a
                href="https://www.mathchamp.ca/games/AlienPathway"
                className="col-span-4"
              >
                <img
                  src={AlienPathway}
                  alt=""
                  className="w-full h-80 object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="text-white py-12 flex justify-center bg-gradient-to-r from-violet-500 to-indigo-900 "
      >
        <h1 className="text-4xl">SKILLS</h1>
        <div className="text-white  grid grid-cols-3 md:grid-cols-5 sm:grid-col:2 text-xl space-y-12 justify-items-center bg-gradient-to-r from-violet-500 to-indigo-900">
          <div>
            <img className="h-20 w-full mt-12" src={reactpng} alt="" />
          </div>
          <div>
            <img className="h-20 w-full" src={TypeScriptpng} alt="" />
          </div>
          <div>
            <img className="h-20 w-full" alt="" src={JavaScriptpng} />
          </div>

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
            <img className="h-20 w-full" alt="" src={redux} />
          </div>
          <div>
            <img className="h-20 w-full" alt="" src={R} />
          </div>
          <div>
            <img className="h-20 w-full" alt="" src={VBA} />
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="text-black py-12 grid grid-cols-[20px_1fr_20px]T bg-gradient-to-r from-violet-500 to-indigo-900"
      >
        <div></div>
        <form
          action="https://getform.io/f/501c4b9f-b28b-46aa-a746-858fb243f3da"
          method="POST"
        >
          <div className="flex flex-col space-y-4">
            <label htmlFor="name">Name:</label>
            <input type="text" name="Name" id="name" className="border-2 p-2" />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="Email"
              id="email"
              className="border-2 p-2"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              name="Message"
              id="message"
              className="border-2 p-2 h-40"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex justify-center"
                name="Submit"
              >
                <img src={submit} alt="" className="h-16 mr-8" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-violet-500 to-indigo-900"> </div>
    </div>
  );
}

export default App;
