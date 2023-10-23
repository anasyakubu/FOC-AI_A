import React from "react";
import QuestionForm from "../components/questionForm";

const Ask = () => {
  return (
    <div
      className="Ask bg-gray-900 flex justify-center text-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-gray-800">
        <h1>Question and Answer App</h1>
        <QuestionForm />
      </div>
    </div>
  );
};

export default Ask;
