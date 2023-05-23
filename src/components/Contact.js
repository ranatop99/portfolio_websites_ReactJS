import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col p-4 justify-center text-white max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-2">Get in touch with me:</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c3178598-4997-4e6b-a571-673a3a184a83"
            method="POST"
            className="flex flex-col w-full h-full md:w-1/2 justify-center "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Any Queries for me?"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's have a chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
