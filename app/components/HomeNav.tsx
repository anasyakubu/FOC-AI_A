import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const HomeNav = () => {
  return (
    <div className="HomeNav">
      <div className="navbar bg-transparent" style={{ color: "#122231" }}>
        <div className="flex-1">
          <Link href="/" className="flex p-5 normal-case text-white text-xl">
            focGPT{" "}
            <div className="w-10 h-10 rounded-full">
              <Image src={Logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-white" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <SignedIn>
                <Link className="text-white" href="/faqs">
                  Ask
                </Link>
              </SignedIn>
            </li>
            <SignedOut>
              <Link
                className="p-4 ml-5 bg-blue-600 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800"
                href="/sign-in"
              >
                Login
              </Link>
            </SignedOut>
            {/* <li>
              <Link
                href="/login"
                className="p-4 ml-5 bg-blue-600 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800"
              >
                Sign in
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
