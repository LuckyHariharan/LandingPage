import resume from "./LakshmanHariharanresume.jpg";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import hero2 from "./hero2.png";
import donating from "./person-donating.png";
import "./App.css";

function App() {
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="grid sm:grid-cols-1 grid-rows-7 text-slate-700  z-50">
      <nav className="px-2 z-50 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img
            src={donating}
            className="h-20 mr-3 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">
            Lakshman Hariharan
          </span>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

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
        className="hidden w-full md:block md:w-auto"
        id="navbar-default"
      ></div>
      <div
        id="home"
        className=" w-full 1 py-8 mr-12 px-4  text-white space-y-4  bg-gradient-to-r from-sky-800 to-indigo-900  "
      >
        {/* <a href="mailto:lharihar@uwaterloo.ca">Email</a> */}

        <p className="flex place-content-center text-2xl text-white px-4 whitespace-normal ">
          Front End Software Engineer
        </p>
        <div className="flex place-content-center space-x-8">
          <a className=" hover:animate-[pulse_1.5s]" href={resume}>
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

      <div
        id="about"
        className="grid sm:grid-cols-2 md:grid-cols-[1fr_1fr] text-white h-screen text-xl p-8  bg-gradient-to-r from-sky-500 to-indigo-900 "
      >
        <div className="flex flex-col place-content-center space-y-12">
          <h1 className="text-3xl ">I am a software engineer</h1>
          <p className="">
            with a passion for using front-end tools to thoughtfully improve the
            user experience. As a generalist I excel at learning new
            technologies and taking on challenging problems.
          </p>{" "}
        </div>
        <img alt="" className="h-120 font-size " src={hero1}></img>
      </div>

      <div className="grid text-white h-screen justify-items-center bg-gradient-to-r from-sky-500 to-indigo-900 ">
        PROJECTS I have built a few games using React for students to practice
        mental math skills. Additionally, I developed a coaching dashboard to
        increase user engagement and allow coaches to view their students
        progress in one place. Lastly I have setup a CI/CD workflow in GitHub
        Actions. Future projects include: ecommerce website, full stack feature,
        and a mobile skillify app.
      </div>
      <div
        id="skills"
        className="text-white flex justify-center bg-gradient-to-r from-sky-900 to-indigo-900 "
      >
        SKILLS
      </div>
      <div className="text-white grid grid-cols-4 md:grid-cols-2 justify-items-center bg-gradient-to-r from-sky-500 to-indigo-900">
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
      <div className="text-white grid justify-contents-center bg-gradient-to-r from-sky-500 to-indigo-900">
        <form action="mailto:lharihar@uwaterloo.ca" method="post">
          CONTACT ME Name: <input type="text" name="Name"></input>
          Email: <input type="text" name="Email"></input>
        </form>
      </div>
      <div className="grid text-white justify-items-center  bg-gradient-to-r from-sky-900 to-indigo-900">
        FOOTER About Top of the page
      </div>

      <div className="grid text-white justify-items-center bg-gradient-to-r from-indigo-900 to-sky-900 "></div>
      <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul className="flex place-content-end flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#home"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Home
            </a>
          </li>

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
              href="#contact"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
