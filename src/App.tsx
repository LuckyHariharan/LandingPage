import About from "./AboutMe";
import Contact from "./Contact";
import NavbarComponent from "./NavbarComponent";
import ProjectWork from "./ProjectWork";
import SkillsComponent from "./SkillsComponent";
function App() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=forma)] text-slate-700 ">
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
