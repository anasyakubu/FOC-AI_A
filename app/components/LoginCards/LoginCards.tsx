"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import SvgIcon from "../../../public/undraw_mobile_login_re_9ntv.svg";
import "./LoginCards.scss";

const LoginCards = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="LoginBetaCard rounded-xl bg-gray-800">
      <div className="text-black lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
        <div className="img flex justify-center items-center text-center">
          {" "}
          <Image src={SvgIcon} alt="" />
        </div>
        <div className="p-5">
          <div className="mt-5">
            {/* <img src={Proptter} alt="" width="100px" /> */}
            <h2 className="text-2xl font-bold text-white">Welcome to focGPT</h2>
            {/* <p className='mt-3'>Enter the email address associated <br /> with your account</p> */}
          </div>
          <div className="mt-2">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full mb-3 mt-3 p-3 outline-none border-b-2 bg-transparent text-white border-white"
                placeholder="Enter Email Address"
              />
              <div className="relative">
                <input
                  className="w-full mb-3 mt-3 p-3 outline-none border-b-2 bg-transparent text-white border-white"
                  type={showPassword ? "text" : "password"}
                  name="userPassword"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  autoComplete="true"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    className="check text-white"
                    onClick={handleCheckboxChange}
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-gray-300 text-md">
                  <Link href="/">Forgot Password ?</Link>
                </p>
              </div>
              <div className="mt-3">
                <button className="hoverBtn w-full p-3 bg-blue-600 text-white rounded-lg">
                  Continue
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p className="text-sm text-white">
                Dont have an Account ?{" "}
                <Link className="text-gray-300" href="/">
                  Sign up Here
                </Link>
              </p>
            </div>
            <div className="mt-5 flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-400">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="mb-2 mt-2 text-center">
              <div>
                <p className="font-semibold mb-2 text-white">Login with :</p>
              </div>
              <div className="">
                <p className="hoverBtn p-3 bg-gray-900 rounded-xl text-white hover:bg-gray-800">
                  <Link href="/">
                    {/* <FaGoogle /><span>Google</span>  */}
                    Google
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCards;
