import React from "react";
import hero1 from "./busy-project-manager-overwhelmed-by-work.png";

import submit from "./submit.png";
const Contact = () => {
  return (
    <div
      id="Contact"
      className="text-black bg-white py-12 grid grid-cols-[20px_1fr_20px] "
    >
      <div></div>
      <form
        action="https://getform.io/f/501c4b9f-b28b-46aa-a746-858fb243f3da"
        method="POST"
      >
        <div className="flex flex-col text-xl mx-4 lg:mx-40 md:place-items-cente space-y-4">
          <h1 className="text-4xl flex place-content-center">Chat with me!</h1>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="Name"
            id="name"
            className="border-4 p-2  sm:w-full"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="Email"
            id="email"
            className="border-4 p-2 w-full"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="Message"
            id="message"
            className="border-4 p-2 h-40  w-full"
          ></textarea>
          <div className="flex justify-center">
            <button type="submit" className="flex justify-center" name="Submit">
              <img src={submit} alt="" className="h-8 opacity-80" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
