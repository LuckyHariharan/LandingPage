import React from "react";
import logo from "./logo.svg";
import resume from "./LakshmanHariharanresume.jpg";
import sleep from "./sleep.jpg";
import { Document } from "react-pdf";
import "./App.css";

function App() {
  console.log();
  return (
    // <div className="grid grid-rows-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] ">
    <div className="">
      <div className="p-4 text-white grid grid-rows-4 bg-gradient-to-b from-indigo-600 to-slate-800 ">
        {/* // fixed header w name, links to resume, github, email*/}
        {/* <div className="flex space-x-4 bg-[url(https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]"> */}
        <div className="flex space-x-4 ">
          <p className="text-3xl text-slate-200 lg:w-80 md:w-80 w-24">
            Lakshman Hariharan
          </p>
        </div>
        <div className="flex flex-row md:absolute md:right-1 space-x-4 px-8 sm:relative">
          <a href="mailto:lharihar@uwaterloo.ca">Email</a>
          <a href="https://github.com/LuckyHariharan">GitHub</a>
          <a href={resume}>Resume</a>
          {/* // Nav bar to navigate through portfolio pieces */}
        </div>
        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2">
          {/* // hero section */}
          <div className="">Mission/Hero </div>
          <div></div>
          <div></div>
          <div>
            Mission/Hero statement 2<img src="/profile"></img>
          </div>
          <div>Mission/Hero statement 3</div>
        </div>
        {/* //show off your portfolio here */}
        <div className="grid place-items-center">
          See my portfolio projects here, lorem ipsum data data 1123 abc lorem
          ipsum data data 1123 abc lorem ipsum data data 1123 abc lorem ipsum
          data data 1123 abc lorem ipsum data data 1123 abc lorem ipsum data
          data 1123 abc
        </div>
        {/* // footer here with contact fields */}
        <div className="text-sm grid place-items-center">
          <img src="/sleep.jpg" alt=""></img>
          Footer with contact details
        </div>
      </div>
    </div>
  );
}

export default App;
