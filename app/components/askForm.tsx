"use client";
import React, { useState } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { SiMinutemailer } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const AskForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "https://open-ai21.p.rapidapi.com/qa";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "2646878456mshbd1d8c2e78ddee4p19813djsn0d1d4503ce73", // Replace with your actual RapidAPI key
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      body: JSON.stringify({
        question,
        context: "Your context goes here", // Add your context here
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the response as JSON
      const answerText = result.result; // Extract the answer from the JSON object
      setAnswer(answerText);
    } catch (error) {
      console.error(error);
      setAnswer("Error occurred while fetching data");
    }
  };

  return (
    <div className="AskForm">
      <div
        className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16 lg:py-24"
        style={{ height: "100vh" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="flex text-lg font-bold tracking-tight text-white sm:text-lg text-left">
                <Image src={Logo} alt="Logo" width={80} />{" "}
                <span> How can I help you today?</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 text-left">
                Tell me what`s on your mind, or pick a suggestion.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                {/* <label htmlFor="email-address" className="sr-only">
                  Email address
                </label> */}
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter a Prompt Here"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <SiMinutemailer />
                  </button>
                </form>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <FaBrain className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Brainstorm</dt>
                <dd className="mt-2 leading-7 text-gray-400 text-left">
                  Can you help me brainstorm 7 ideas for a customer loyalty
                  program? I work at a small bookstore.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <TfiWrite className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Write an Email
                </dt>
                <dd className="mt-2 leading-7 text-gray-400 text-left">
                  Write a short email to my professor requesting a deadline
                  extension for my project.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-10">
          <h2>Answer : {answer}</h2>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AskForm;
