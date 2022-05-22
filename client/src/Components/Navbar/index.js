// import React from 'react'
// import { FaUser } from "react-icons/fa";
// import { RiSearchLine } from "react-icons/ri";
// import { MdLocationOn, MdArrowDropDown } from "react-icons/md";

// const MobileNav = () => {
//     return (
//         <>
//         <div className="flex items-center justify-between w-full lg:hidden">
//             <div className="w-24 m-1">
//                 <img 
//                 src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
//                 alt="logo"
//                 className="w-full h-full"
//                 />
//             </div>
//             <div className="flex items-center gap-3">
//                 <button className="bg-zomato-400 text-white text-xs font-semibold py-2 px-3 rounded-full">Use App</button>
//                 <span className="border p-2 text-lg border-gray-300 text-zomato-300 rounded-full">
//                     <FaUser className="w-full h-full"/>
//                 </span>
//             </div>
//         </div>
//         </>
//     )
// };

// const DesktopNav = () => {
//     return (
//         <>
//         <div className="flex items-center w-full">
//             <div className="w-32 m-2 mr-4">
//                 <img 
//                 src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
//                 alt="logo"
//                 className="w-full h-full"
//                 />
//             </div>
//             <div className="flex items-center shadow-md p-3 px-1 rounded-lg mt-1 w-3/5">
//                 <div className="w-2/5 flex items-center justify-between border-r-2 px-1">
//                     <div className="flex gap-1 text-gray-500">
//                        <span className="h-6 w-6 text-zomato-300"><MdLocationOn className="w-full h-full" /></span>
//                        <input type="text" placeholder="Nagpur" className="outline-none"/>
//                     </div>
//                     <div className="h-6 w-6 text-gray-600">
//                         <MdArrowDropDown className="w-full h-full" />
//                     </div>
//                 </div>
//                 <div className="w-3/5 flex items-center px-1 text-gray-500">
//                     <span className="h-5 w-12 text-gray-400">
//                         <RiSearchLine className="w-full h-full"/>
//                     </span>
//                     <input type="text" placeholder="Search for a restaurant, cuisine or a dish" className="outline-none w-full" />
//                 </div>
//             </div>
//             <div className="flex items-center mx-9 text-lg">
//                 <button className="text-gray-400 hover:text-gray-800 px-12">Login</button>
//                 <button className="text-gray-400 hover:text-gray-800 ">Sign Up</button>
//             </div>
//         </div>
//         </>
//     )
// };

// const Navbar = () => {
//     return (
//         <>
//         <nav className="px-5 py-2 flex bg-white shadow-md items-center lg:hidden">
//             <MobileNav />
//         </nav>
//         <nav className="mx-20 px-3 py-2 bg-white hidden md:hidden lg:flex">
//             <DesktopNav />
//         </nav>
//         </>
//     )
// };

// export default Navbar;

import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import gravatar from "gravatar";

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

// redux actions
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";

const MobileNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();

  const reduxState = useSelector((global) => global.user.user);

  const signOutHandler = () => dispatch(signOut());

  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {reduxState?.user?.fullname ? (
          <>
            {" "}
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
            >
              <img
                src={gravatar.url(reduxState?.user?.email)}
                alt={reduxState?.user?.email}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={signOutHandler}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const reduxState = useSelector((global) => global.user.user);
  const signOutHandler = () => dispatch(signOut());

  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Bengaluru"
                className=" focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {reduxState?.user?.fullname ? (
            <div className="relative w-20">
              {" "}
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src={gravatar.url(reduxState?.user?.email)}
                  alt={reduxState?.user?.email}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3  -right-4 w-full bg-white z-30 flex flex-col gap-2">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-28 flex gap-4 ">
              <button
                onClick={SignIn}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Login
              </button>
              <button
                onClick={SignUp}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);
  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
        <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
      </nav>
    </>
  );
};

export default Navbar;