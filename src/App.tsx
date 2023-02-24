import resume from "./LakshmanHariharanresume.jpg";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import hero2 from "./hero2.png";
import donating from "./person-donating.png";
import reactpng from "./REACTPNG.png";
import coaching from "./coaching.png";
import AlienPathway from "./ap.png";
import JavaScriptpng from "./javascriptwebp.webp";
import tailwindcsspng from "./tailwindcss.png";
import htmlpng from "./hmlt5png.png";
import TypeScriptpng from "./typescriptpng.png";
import css from "./CSSJPEG.jpg";
import graphqlpng from "./graphql.png";
import nextjspng from "./NextJSPNG.png";
import agilepng from "./agilepng.png";
import pythonpng from "./pythonpng.png";
import git from "./git.png";
import jest from "./JESTWEBP.webp";
import redux from "./Reduxpng.png";
import R from "./RPNG.png";
import VBA from "./vba.png";
import personusing from "./person-dealing-with-a-social-media-issue.png";

function App() {
  return (
    <div className="grid font-roboto  text-slate-700  ">
      <nav className="px-2  border-gray-200 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="mr-0 md:mr-24 flex flex-wrap justify-center md:justify-center mx-auto">
          <div className=" ">
            <img
              src={donating}
              className="h-0 sm:h-24 mr-3 xl"
              alt="Flowbite Logo"
            />
          </div>
          <div className="flex justify-center flex-col">
            <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">
              Lakshman 'Lucky' Hariharan
            </span>
            <p className="flex place-content-center text-2xl text-white px-4 whitespace-normal ">
              Front End Software Engineer
            </p>

            <div className="flex border-2 place-content-center text-white space-x-8">
              <a
                className=" hover:animate-[pulse_1.5s]"
                href="https://drive.google.com/file/d/1ri6q6CdXIXWJEO63b7Lt0uyG661GfOBM/view?usp=sharing"
              >
                {" "}
                Resume
              </a>
              <a
                className="hover:animate-[pulse_1.5s]"
                href="https://github.com/LuckyHariharan"
              >
                GitHub
              </a>
              <a
                className="hover:animate-[pulse_1.5s]"
                href="https://www.linkedin.com/in/lakshman-hariharan"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:hidden  w-full text-lg  " id="navbar-multi-level">
            <ul className="flex flex-col justify-contents-center p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0  ">
              <li>
                <a
                  href="#about"
                  className="block  py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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

      <div className="hidden w-full  md:w-auto " id="navbar-default"></div>
      <div
        id="about"
        className=" w-full h-4 text-lg text-white space-y-4  bg-gradient-to-r from-purple-600 to-indigo-900  "
      >
        {/* <a href="mailto:lharihar@uwaterloo.ca">Email</a> */}

        {/* // Nav bar to navigate through portfolio pieces */}
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-[3fr_2fr] text-white text-xl p-8  bg-gradient-to-r from-purple-500 to-indigo-900 ">
        <div className="flex flex-col flex-wrap place-content-center ">
          <h1 className="text-4xl flex md:align-center  ">
            Hello! My name is Lucky, and I am a front end developer!
          </h1>
          <p className="">
            In my current role at Skillify, a Toronto based startup that
            provides digital media literacy coaching, I have built React games,
            a coaching dashboard and interactive educational web development
            content. I graduated from the University of Waterloo in 2021 as an
            Actuarial Science major and transitioned into software engineering
            in 2022. I have a keen eye for design, and I enjoy learning new
            tools and frameworks. I have experience developing with TypeScript,
            React, Redux, TailwindCSS, Jest, and GraphQL.
          </p>{" "}
        </div>
        <img
          alt=""
          className="md:h-100 w-full md:mt-20 font-size"
          src={hero1}
        ></img>
      </div>
      <div
        id="projects"
        className=" py-20 text-white items-center bg-gradient-to-r from-purple-500 to-indigo-900 "
      >
        <h1 className="text-4xl flex justify-center ">PROJECTS</h1>
        <div className=" place-items-center">
          <div>
            <p className="text-2xl flex justify-center">Coaching Dashboard</p>{" "}
            <div className="grid  md:grid-cols-[20px_140px_1fr_20px] grid-cols-1">
              <div className=" md:h-2"></div>
              <p className="py-4 ">
                Developed a coaching dashboard to allow Skillify coaches to view
                every students progress at a glance. The tech stack includes:
                TypeScript, React, TailwindCSS, Redux, and Jest for unit
                testing.
              </p>
              <img alt="" src={coaching} className="h-80 w-full  "></img>
              <div className="md:h-2"></div>
            </div>
          </div>

          <div className="  ">
            <p className="text-2xl flex justify-center">React Games</p>{" "}
          </div>
          <div>
            <a
              className="grid  md:grid-cols-[20px_140px_1fr_20px] grid-cols-1"
              href="https://www.mathchamp.ca/games/AlienPathway"
            >
              <div className="md:h-2"></div>
              <p>
                Fully scoped and built an alienpathway boardgame where students
                practice mental math to create a path. Front-end: React,
                TypeScript Back-end Next.js
              </p>
              <img alt="" src={AlienPathway} className="h-80  w-full"></img>
              <div className="md:h-2"></div>
            </a>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="text-white py-12 flex justify-center bg-gradient-to-r from-purple-500 to-indigo-900 "
      >
        <h1 className="text-4xl">SKILLS</h1>
      </div>
      <div className="text-white  grid grid-cols-3 sm:grid-col:2 text-xl space-y-2 justify-items-center align-middle bg-gradient-to-r from-purple-500 to-indigo-900">
        <div>
          <p className="align-middle">React</p>
          <img className="h-16 w-full" src={reactpng} alt="" />
        </div>
        <div>
          TypeScript
          <img className="h-16 w-16" src={TypeScriptpng} alt="" />
        </div>
        <div>
          JavaScript <img className="h-16 w-16" alt="" src={JavaScriptpng} />
        </div>

        <div>
          TailwindCSS <img className="h-16 w-16" alt="" src={tailwindcsspng} />
        </div>

        <div>
          HTML5 <img className="h-16 w-16" alt="" src={htmlpng} />
        </div>
        <div>
          CSS3 <img className="h-16 w-16" alt="" src={css} />
        </div>
        <div>
          GraphQL <img className="h-16 w-16" alt="" src={graphqlpng} />
        </div>
        <div>
          Next.js <img className="h-16 w-16" alt="" src={nextjspng} />
        </div>
        <div>
          Agile <img className="h-16 w-16" alt="" src={agilepng} />
        </div>
        <div>
          Python <img className="h-16 w-16" alt="" src={pythonpng} />
        </div>
        <div>
          Git <img className="h-16 w-16" alt="" src={git} />
        </div>
        <div>
          Jest <img className="h-16 w-16" alt="" src={jest} />
        </div>
        <div>
          Redux <img className="h-16 w-16" alt="" src={redux} />
        </div>
        <div>
          R <img className="h-16 w-16" alt="" src={R} />
        </div>
        <div>
          VBA <img className="h-16 w-16" alt="" src={VBA} />
        </div>
      </div>

      <div className="text-black py-12 grid grid-cols-[20px_1fr_20px] bg-gradient-to-r from-purple-500 to-indigo-900">
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
            <div>
              <button
                type="submit"
                className="border-2 w-full flex justify-center"
                name="Submit"
              >
                <img src={personusing} alt="" className="h-16 mr-8" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-900"> </div>
    </div>
  );
}

export default App;
