import React from 'react';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
    return (
        <>
            <div className="  w-full p-4 lg:w-1/3 md:w-1/2">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg">
                <div className={`w-full p-4 h-56 rounded-t-2xl  bg-${props.bg}-100`}>
                    <img src={props.image}
                    alt="Supplements"
                    className="w-full h-full" 
                    />
                </div>
               
 
              <div className="p-3 flex flex-col gap-3">
              <div className="flex mt-2 items-center gap-3">
               <div className="w-4 h-4">
                <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                alt="veg"
                className="w-full h-full" 
                />
                </div>
                <ReactStars
                count={5}
                value={3.5}
                size={24}
                isHalf={true}
                emptyIcon={<BsStar />}
                halfIcon={<BsStarHalf />}
                fullIcon={<BsStarFill />}
                activeColor="#ffd700"
                />
                <span className="text-gray-400 ">15</span>

               </div>
               <h3 className="text-xl font-bold text-gray-700">Sleep - Timed Release Melatonin</h3>
               <p className="text-sm font-light text-gray-400">
               An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher.
               </p>
               <div className="mt-4 ">
               <hr />
               </div>
               <div className="">
                   <span>
                   <s className="text-gray-400 font-light mr-3">₹650</s> <strong>₹320</strong>
                   <p>Monthly pack- 30 tablets</p>
                   </span>
               </div>
              </div>
                </div>
            </div>
        </>
    )
}

export default NutritionCard;