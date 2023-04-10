import React, { useState } from "react";
import hero1 from "./profile.jpg";

const NavbarComponent = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = (prev: boolean) => {
    setHidden(!prev);
  };
  return (
    <nav className=" grid grid-cols-1 items-center  text-black justify-between bg-white p-4">
      <div className="flex place-content-between">
        <button onClick={() => handleClick(hidden)}>
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            viewBox="0 0 20 16"
            fill="currentColor"
            className="h-10 w-10 mx-2 md:hidden group-hover:fill-blue-500"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>{" "}
        <div className="font-semibold flex place-items-center mr-auto text-3xl   md:text-5xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="h-10 md:h-16 inline-block   mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
            />
          </svg>
          <div className="mt-2 mr-4">Lucky Hariharan</div>
        </div>
        <div> </div>
        <ul
          id="nav-menu"
          className=" space-x-12  hidden md:flex  mr-20 items-center font-semibold text-2xl "
        >
          <a href="#Skills">Skills</a>
          <a href="#ProjectWork">Projects</a>
          <a href="#Contact">Contact</a>
        </ul>
      </div>
      <div>
        <div className={`menu-options ${hidden ? "hidden " : ""}`}>
          <ul
            id="nav-menu"
            className="space-y-2 items-center px-4 flex flex-col  font-semibold text-xl mt-4"
          >
            <a href="#Skills">Skills</a>
            <a href="#ProjectWork">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
