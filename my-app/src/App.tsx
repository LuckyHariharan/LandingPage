import resume from "./LakshmanHariharanresume.jpg";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import hero2 from "./hero2.png";
import donating from "./person-donating.png";
import coaching from "./coaching.png";
import AlienPathway from "./ap.png";
import personusing from "./person-dealing-with-a-social-media-issue.png";

function App() {
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="grid font-sans  text-slate-700  z-50">
      <nav className="px-2 z-50  border-gray-200 bg-gradient-to-r from-purple-900 to-indigo-900">
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
              Lakshman Hariharan
            </span>
            <p className="flex place-content-center text-2xl text-white px-4 whitespace-normal ">
              Front End Software Engineer
            </p>

            <div className="flex place-content-center text-white space-x-8">
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
                href="https://github.com/LuckyHariharan"
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
                  href="#skills"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Skills
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

      <div className="grid  grid-cols-1 md:grid-cols-[5fr_4fr] text-white text-xl p-8  bg-gradient-to-r from-purple-500 to-indigo-900 ">
        <div className="flex flex-col flex-wrap place-content-center space-y-4">
          <h1 className="text-3xl flex md:align-center  ">
            Hello! My name is Lucky, and I am a front end developer with a
            background in actuarial science.
          </h1>
          <p className="">
            In my current role at Skillify, an ed-tech startup dedicated to
            teaching digital media literacy I have built various features
            including React games, a coaching dashboard and educational content
            on TailwindCSS. I graduated the University of Waterloo in 2021 as an
            Actuarial Science major and transitioned into software engineering
            in 2022. My passion is to create, and I have a keen eye for design.
            I enjoy learning new tools and frameworks, and have intermediate
            skills wtih TypeScript, React, Redux, TailwindCSS, Jest, and
            GraphQL.
          </p>{" "}
        </div>
        <img alt="" className="md:h-88 font-size md:mt-12" src={hero1}></img>
      </div>
      <div
        id="skills"
        className="text-white py-12 flex justify-center bg-gradient-to-r from-purple-500 to-indigo-900 "
      >
        <h1 className="text-4xl">SKILLS</h1>
      </div>
      <div className="text-white grid grid-cols-3  text-2xl border-2 justify-items-center bg-gradient-to-r from-purple-500 to-indigo-900">
        <ul>React</ul>
        <ul>TypeScript</ul>
        <ul>JavaScript</ul>
        <ul>TailwindCSS</ul>
        <ul>HTML5</ul>
        <ul>CSS3</ul>
        <ul>GraphQL</ul>
        <ul>Next.js</ul>
        <ul>Agile</ul>
        <ul>Python</ul>
        <ul>Git</ul>
        <ul>Jest</ul>
        <ul>Redux</ul>
        <ul>R</ul>
        <ul>VBA</ul>
      </div>

      <div
        id="projects"
        className=" grid py-20 text-white  justify-items-center bg-gradient-to-r from-purple-500 to-indigo-900 "
      >
        <h1 className="text-4xl">PROJECTS</h1>
        <div>
          <div className="order-0 -space-y-4">
            <p className="text-2xl">Coaching Dashboard</p>{" "}
          </div>
          <p>
            Developed a coaching dashboard feature at Skillify, to allow coaches
            to view every students progress at a glance. Front-end TypeScript
            React TailwindCSS
          </p>
          <img alt="" src={coaching} className="h-80"></img>
          <div className="order-0 -space-y-4">
            <p className="text-2xl">React Games</p>{" "}
          </div>
          <a href="https://www.mathchamp.ca/games/AlienPathway">
            <p>
              Developed an alienpathway boardgame where students practice mental
              math to create a path. Front-end: React, TypeScript Back-end
              Next.js
            </p>
            <img alt="" src={AlienPathway} className="h-80"></img>
          </a>
        </div>
      </div>
      <div className="text-black py-12 bg-gradient-to-r from-purple-500 to-indigo-900">
        <img src={personusing} alt="" className="h-40" />
        <form
          action="https://getform.io/f/501c4b9f-b28b-46aa-a746-858fb243f3da"
          method="POST"
        >
          CONTACT ME Name: <input type="text" name="Name"></input>
          Email: <input type="text" name="Email"></input>
          Message: <input type="text" name="Message"></input>
          <button type="submit" className="border-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
