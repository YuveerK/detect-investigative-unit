import React from "react";
import { Link } from "react-router-dom";
import {
  IoIosInformationCircleOutline,
  IoIosFingerPrint,
} from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaMicroscope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] flex items-center justify-between p-4  ">
      <div className="flex items-center ">
        <FaMicroscope className="text-3xl mr-2 md:text-2xl " />
        <h1 className="text-xl md:text-4xl font-light">DIU</h1>
      </div>
      <div className="hidden">
        <RxHamburgerMenu size={35} />
      </div>

      <div className="">
        <div className="flex">
          <Link className="mx-4 flex items-center font-thin text-2xl ">
            <IoHomeOutline size={30} className="mr-2 " />
            Home
          </Link>
          <Link className="mx-4 flex items-center font-thin text-2xl ">
            <IoIosInformationCircleOutline size={30} className="mr-2 " />
            About
          </Link>
          <Link className="mx-4 flex items-center font-thin text-2xl ">
            <IoIosFingerPrint size={30} className="mr-2 " />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
