import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";

const PictureCarousalCard = () => {
    return (
      <>
        <div className="w-24 h-32 md:w-64 md:h-80  relative px-1">
          <div className="w-full h-full relative">
            <img
              src="https://b.zmtcdn.com/data/pictures/9/18698509/c860f77821518afd06b042939a4e974a.jpg"
              alt="Laughing Budda"
              className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
            />
            <div
              className="w-full h-full absolute inset-0  rounded-lg"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
              }}
            />
          </div>
          <div className="absolute w-full left-5 bottom-2 text-white ">
            <h4 className="z-10">On Trending This Week</h4>
            <h6 className="z-10 flex items-center">
            20 Places <IoMdArrowDropright className="pt-1 font-black text-2xl"/>
            </h6>
          </div>
        </div>
      </>
    );
  };

export default PictureCarousalCard;