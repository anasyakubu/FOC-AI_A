import React from "react";
import LoginCards from "../components/LoginCards/LoginCards";

const Login = () => {
  return (
    <div className="Login bg-gray-900">
      <div className="flex justify-center items-center h-screen">
        <LoginCards />
      </div>
    </div>
  );
};

export default Login;
