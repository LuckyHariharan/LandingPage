import resume from "./LakshmanHariharanresume.jpg";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";
import hero2 from "./hero2.png";
import "./App.css";

function App() {
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="grid grid-rows-7 text-slate-700 ">
      <div className="flex w-full mr-12 text-white place-content-center space-x-4  bg-gradient-to-r from-sky-800 to-indigo-900  ">
        {/* <a href="mailto:lharihar@uwaterloo.ca">Email</a> */}
        <div className="flex hover:animate-[pulse_2s]">
          <a className="" href={resume}>
            {" "}
            Resume
          </a>
        </div>
        <a
          className="hover:animate-[pulse_2s]"
          href="https://github.com/LuckyHariharan"
        >
          GitHub
        </a>
        <a
          className="hover:animate-[pulse_2s]"
          href="https://github.com/LuckyHariharan"
        >
          LinkedIn
        </a>
        {/* // Nav bar to navigate through portfolio pieces */}
      </div>
      <div className="grid h-16 place-content-start w-full   bg-sky-500">
        <div>
          <ul className="flex">
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#about">
                Active
              </a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#about">
                Link
              </a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#about">
                Link
              </a>
            </li>
          </ul>
          <p className="text-4xl h-8">Lakshman Hariharan</p>
          <p className="text-lg text-white px-8 h-8">
            Front End Software Engineer
          </p>
        </div>
      </div>

      <div
        id="about"
        className="grid text-white h-screen justify-items-centerr bg-gradient-to-r from-sky-500 to-indigo-900 "
      >
        ABOUT ME I am a software engineer with a passion for using front-end
        tools to thoughtfully improve the user experience. As a generalist I
        excel at learning new technologies and taking on challenging problems.
        <img alt="" className="h-80" src={hero1}></img>
      </div>

      <div className="grid text-white h-screen justify-items-center bg-gradient-to-r from-sky-500 to-indigo-900 ">
        PROJECTS I have built a few games using React for students to practice
        mental math skills. Additionally, I developed a coaching dashboard to
        increase user engagement and allow coaches to view their students
        progress in one place. Lastly I have setup a CI/CD workflow in GitHub
        Actions. Future projects include: ecommerce website, full stack feature,
        and a mobile skillify app.
        <img className="h-80" alt="" src={hero2}></img>
      </div>
      <div className="text-white flex justify-center bg-gradient-to-r from-sky-900 to-indigo-900 ">
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
    </div>
  );
}

export default App;
