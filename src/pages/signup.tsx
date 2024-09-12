import React, { useState } from "react";

export class Signup extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    levelOfEducation: "",
    discordUsername: "",
  };
}

function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col sm:w-[80vw] md:w-[400px] space-y-2 justify-center items-start">
        <ol className="my-10 flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
          <li className="flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
                1
              </span>{" "}
              Name
            </div>
          </li>
          <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                2
              </span>{" "}
              Info
            </div>
          </li>
          <li className="flex w-full relative text-gray-900 after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-zinc-100 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                2
              </span>{" "}
              Link Discord
            </div>
          </li>
        </ol>
        <h1 className="text-lg">Let's get started with your name.</h1>
        <p>First Name</p>
        <input
          className="border rounded-md p-1 w-full"
          type="text"
          placeholder="Jane"
        />
        <p>Last Name</p>
        <input
          className="border rounded-md p-1 w-full"
          type="text"
          placeholder="Doe"
        />
        <button className="bg-primary p-2 rounded-xl w-full">Next -</button>
      </div>
    </div>
  );
}

export default SignUp;
