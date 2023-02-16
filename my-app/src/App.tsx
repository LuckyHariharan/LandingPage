import resume from "./LakshmanHariharanresume.jpg";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import hero2 from "./hero2.png";
import donating from "./person-donating.png";
import coaching from "./coaching.png";
import "./App.css";

function App() {
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="grid sm:grid-cols-1  text-slate-700  z-50">
      <nav className="px-2 z-50  border-gray-200 bg-gradient-to-r from-sky-900 to-indigo-900">
        <div className="container  flex flex-wrap items-center justify-between mx-auto">
          <div className="flex sm:justify-center ">
            <img src={donating} className="h-24 mr-3 xl" alt="Flowbite Logo" />
          </div>
          <div className="flex justify-center sm: flex-col">
            <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">
              Lakshman Hariharan
            </span>
            <p className="flex place-content-center text-2xl text-white px-4 whitespace-normal ">
              Front End Software Engineer
            </p>
          </div>

          <div
            className="hidden w-full text-lg md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="fixed  top-0 right-0 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0  ">
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

      <div
        className="hidden w-full md:block md:w-auto "
        id="navbar-default"
      ></div>
      <div
        id="about"
        className=" w-full 1 py-8 mr-12 px-4 text-lg text-white space-y-4  bg-gradient-to-r from-sky-800 to-indigo-900  "
      >
        {/* <a href="mailto:lharihar@uwaterloo.ca">Email</a> */}

        <div className="flex place-content-center space-x-8">
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
        {/* // Nav bar to navigate through portfolio pieces */}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-[1fr_1fr] text-white h-screen text-xl p-8  bg-gradient-to-r from-sky-500 to-indigo-900 ">
        <div className="flex flex-col place-content-center space-y-10">
          <h1 className="text-3xl flex align-center ">
            I am a software engineer
          </h1>
          <p className="">
            with a passion for using front-end tools to thoughtfully improve the
            user experience. As a generalist I excel at learning new
            technologies and taking on challenging problems.
          </p>{" "}
        </div>
        <img alt="" className="h-88 font-size mt-12" src={hero1}></img>
      </div>
      <div
        id="skills"
        className="text-white py-12 flex justify-center bg-gradient-to-r from-sky-500 to-indigo-900 "
      >
        <h1 className="text-4xl">SKILLS</h1>
      </div>
      <div className="text-white grid grid-cols-3 text-2xl  justify-items-center bg-gradient-to-r from-sky-500 to-indigo-900">
        <ul>React</ul>
        <ul>TypeScript</ul>
        <ul>TailwindCSS</ul>
        <ul>JavaScript ES6</ul>
        <ul>HTML5</ul>
        <ul>Node.js</ul>
        <ul>Agile</ul>
        <ul>Python</ul>
        <ul>R</ul>
        <ul>GraphQL</ul>
        <ul>Redux</ul>
        <ul>Jest/Unit Testing</ul>
      </div>

      <div
        id="projects"
        className=" grid py-20 text-white  justify-items-center bg-gradient-to-r from-sky-500 to-indigo-900 "
      >
        <h1 className="text-4xl">PROJECTS</h1>
        <div className="order-0 -space-y-4">
          <p className="text-2xl">Coaching Dashboard</p>{" "}
        </div>
        <p>
          Developed a coaching dashboard feature at Skillify, to allow coaches
          to view every students progress at a glance
        </p>
        <img alt="" src={coaching}></img>
      </div>

      <div className="text-white grid py-12 justify-contents-center bg-gradient-to-r from-sky-500 to-indigo-900">
        <form action="mailto:lharihar@uwaterloo.ca" method="post">
          CONTACT ME Name: <input type="text" name="Name"></input>
          Email: <input type="text" name="Email"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
