import resume from "./LakshmanHariharanresume.jpg";
import "./App.css";

function App() {
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="grid grid-rows-2 text-slate-700 ">
      <div className="">
        <div className="grid place-content-center w-full  bg-gradient-to-r from-sky-500 to-indigo-500">
          <p className="text-4xl ">Lakshman Hariharan</p>
        </div>
        <div className="flex text-white place-content-center space-x-4 px-8 bg-gradient-to-r from-sky-600 to-indigo-700 ">
          <a href="mailto:lharihar@uwaterloo.ca">Email</a>
          <a href={resume}>Resume</a>

          <a href="https://github.com/LuckyHariharan">GitHub</a>
          <a href="https://github.com/LuckyHariharan">LinkedIn</a>
          {/* // Nav bar to navigate through portfolio pieces */}
        </div>
      </div>
      <div className="grid justify-items-center bg-">test</div>
    </div>
  );
}

export default App;
