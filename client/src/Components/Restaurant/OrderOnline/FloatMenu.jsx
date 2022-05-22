import React, {useState} from 'react';
import {HiMenu} from "react-icons/hi";
import {MdClose} from "react-icons/md";

//componets

import MenuListContainer from './MenuListContainer';

const FloatMenu = () => {
        const [isClicked, setisClicked] = useState(false);

    const toggleMenu = () => setisClicked((prev) => !prev);

    return (
        <>
        <div className="fixed z-30 w-8/12  gap-3 flex flex-col items-end bottom-2 right-2 md:hidden">
           {
               isClicked &&  <div className="p-3 h-48 overflow-y-scroll bg-white">
               <MenuListContainer />
           </div>
           }

            <button className=" text-white bg-gray-700 px-3 py-2 rounded-full  flex items-center gap-2"
            onClick={toggleMenu}
            >
            { isClicked ? <MdClose /> :<HiMenu />  } Menu 
            </button>
        </div>
        </>
    )
}

export default FloatMenu