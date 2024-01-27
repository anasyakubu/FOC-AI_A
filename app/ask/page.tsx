import React from "react";
// import QuestionForm from "../components/questionForm";
import AskForm from "../components/AskForm";
import HomeNav from "../components/HomeNav";

const Ask = () => {
  return (
    <div
      className="Ask bg-gray-900 flex justify-center text-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-gray-800">
        <div className="">
          <HomeNav />
        </div>
        {/* <h1 className="text-white">Question and Answer App</h1> */}
        {/* <QuestionForm /> */}
        <AskForm />
      </div>
    </div>
  );
};

export default Ask;
