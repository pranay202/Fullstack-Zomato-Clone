import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

// Icons
import { BsHandbag } from "react-icons/bs";
import { GiFootsteps } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";

const MobileTab = () => {
    
    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: 'Delivery',
            isActive: false
        },
        {
            id: `night`,
            icon: <GiFootsteps />,
            name: 'Night Life',
            isActive: false
        },
        {
            id: `dining`,
            icon: <BiCoffeeTogo />,
            name: 'Dining Out',
            isActive: false
        }       
    ]);

    const { type } = useParams();
    
/*     useEffect(() => {
        if(type) {
            const updateType = allTypes.map((item)=>{
                if(item.id===type) {
                    return {...item, isActive: true};
                }
                return item;
            });
            setAllTypes(updateType);
        }
    },[type]); */

    return (
        <>
        <div className="lg:hidden bg-white shadow-4xl p-3 px-12 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">  
        {
            allTypes.map((items) => (
              /* <div className={ items.isActive ? "flex flex-col relative items-center text-xl text-black border-t-4 border-zomato-400" : "flex flex-col relative items-center text-xl"}>
                {items.icon} 
                <h5 className="text-xs">{items.name}</h5>
              </div> */
              <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
            ))
        }        
        </div>
        </>
    )};

const FoodTab = () => {
    return (
        <>
           <div>
               <MobileTab />
           </div> 
        </>
    )
}

export default FoodTab;
