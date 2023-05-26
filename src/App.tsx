import About from "./AboutMe";
import Contact from "./Contact";
import NavbarComponent from "./NavbarComponent";
import ProjectWork from "./ProjectWork";
import SkillsComponent from "./SkillsComponent";
function App() {
  return (
    <div className=" text-slate-700 ">
      <div className="">
        <NavbarComponent />
        <About />
        <SkillsComponent />
        <ProjectWork />
        <Contact />
      </div>
    </div>
  );
}

export default App;
