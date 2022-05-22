import React from 'react';

import {TiStar} from "react-icons/ti";

const MenuRestaurantSimilarCard = (props) => {
  

    return (
        <>
             <div className="mx-2">
             <div className=" bg-white shadow rounded-md ">
                <div className="w-full h-48">
                    <img src={props.image}
                    alt={props.title}
                    className="w-full h-full object-cover rounded-t-md" />
                </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{props.title}</h3>
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1  pr-2 border-gray-500"> 
                        <span className="flex items-center gap-1 bg-green-600 text-white py-1 px-2 text-xs rounded">
                            30 <TiStar />
                        </span>
                        Dining
                    </span>
                    <span className="w-2 h-6 border-r border-gray-500"></span>
                    <span className="flex items-center gap-1"> 
                        <span className="flex items-center gap-1 bg-green-700 text-white py-1 px-2 text-xs rounded">
                            30 <TiStar />
                        </span>
                        Dining
                    </span>
                </div>
                    <h4>Burger, Fast Food, Beverages</h4>
                </div>

            </div>
             </div>
        </>
    )
}

export default MenuRestaurantSimilarCard;