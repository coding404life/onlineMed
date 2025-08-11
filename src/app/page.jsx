"use client";

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import EmailVerification from "./components/EmailVerification";
import { useState } from "react";

export default function Home() {
  const [nextStep, setNextStep] = useState(false);

  return (
    <div className="bg-background flex min-h-screen  md:h-auto p-2.5">
      {!nextStep && <Sidebar setNextStep={setNextStep} />}

      <main
        className={`bg-white  w-full lg:w-18/24 rounded-2xl py-8 px-4 md:p-6 ${
          nextStep ? "flex" : "hidden"
        } md:flex flex-col justify-center `}
      >
        <div className="w-full max-w-[600px] mx-auto ">
          <p className="text-primary-blue font-bold text-lg">
            Step 3<span className="text-gray opacity-60">/9</span>
          </p>
          <h1 className="mt-3 font-bold text-xl leading-8">
            What is your email?
          </h1>
          <p className="text-secondary-black mt-3">
            This is where we send the note
          </p>

          <EmailVerification />

          <div className="flex justify-between mt-8">
            <button
              className="text-primary-blue cursor-pointer flex gap-0.5 items-center font-bold leading-6"
              onClick={() => setNextStep(false)}
            >
              <Image
                src="caretLeft.svg"
                width={20}
                height={20}
                alt="caret-left"
              />
              <span>Back</span>
            </button>

            <button className="bg-primary-blue text-white rounded-lg hover:bg-gray transition cursor-pointer w-20 lg:max-w-full lg:min-w-32 py-3.5 px-2 font-bold">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
