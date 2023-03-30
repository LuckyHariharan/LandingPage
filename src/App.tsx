import About from "./AboutMe";
import Contact from "./Contact";
import Navbar from "./Navbar";
import ProjectWork from "./ProjectWork";
import Skills from "./Skills";
function App() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] text-slate-700 ">
      <div className="">
        <Navbar />
        <About />
        <Skills />
        <ProjectWork />
        <Contact />
      </div>
    </div>
  );
}

export default App;
