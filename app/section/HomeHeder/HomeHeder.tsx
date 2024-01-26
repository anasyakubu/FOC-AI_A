import React from "react";
import Nav from "../../components/HomeNav";
import Image from "next/image";
import IMG from "../../../public/Chat bot-rafiki.svg";
import "./HomeHeader.scss";
import Link from "next/link";
import Logo from "../../../public/logo.png";

const HomeHeder = () => {
  return (
    <div className="HomeHeder">
      <div
        className="bg-gray-900"
        // style={{ backgroundColor: '#f2f7f8', color: '#3d4f60' }}
      >
        <Nav />
        <div className="lg:px-8">
          <div className="p-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="pl-3 max-w-xl py-24 sm:py-48 lg:py-56 ">
              <div className="text">
                <h1
                  className="flex text-xl font-extrabold tracking-wide shadow-2 sm:text-4xl text-white"
                  //  style={{ color: '#122231' }}
                >
                  focGPT{" "}
                  <div className="w-14 h-14 rounded-full">
                    <Image src={Logo} alt="Logo" />
                  </div>
                </h1>
                <p
                  className="mt-6 text-lg leading-8 text-gray-300"
                  // style={{ color: '#3d4f60' }}
                >
                  Collaborate with{" "}
                  <span className="font-bold text-blue-600">focGPT</span> to
                  brainstorm ideas, spark creativity, and accelerate
                  productivity.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/ask"
                  className="p-4 mr-5 bg-blue-600 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-blue-800"
                >
                  Get Started Now
                </Link>
              </div>
            </div>

            {/* <Fade direction="left"> */}
            <div className="text-center flex justify-center items-center">
              <Image className="Img rounded-2xl" src={IMG} alt="" />
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeder;
