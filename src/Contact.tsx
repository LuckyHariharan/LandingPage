import React from "react";
import submit from "./submit.png";
const Contact = () => {
  return (
    <div
      id="contact"
      className="text-black py-12 grid grid-cols-[20px_1fr_20px] bg-yellow-400"
    >
      <div></div>
      <form
        action="https://getform.io/f/501c4b9f-b28b-46aa-a746-858fb243f3da"
        method="POST"
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" id="name" className="border-2 p-2" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="Email"
            id="email"
            className="border-2 p-2"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="Message"
            id="message"
            className="border-2 p-2 h-40"
          ></textarea>
          <div className="flex justify-center">
            <button type="submit" className="flex justify-center" name="Submit">
              <img src={submit} alt="" className="h-16 mr-8 opacity-80" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
