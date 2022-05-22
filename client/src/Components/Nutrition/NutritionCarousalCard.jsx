import React from 'react'

const NutritionCard = ({ image, title}) => {
    return (<>
        <div className=" bg-white shadow rounded-md px-3 md:px-4 w-24 md:w-56">
                <div className="w-full h-12 md:h-36">
                    <img src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-md" />
                </div>
            <div className="">
                <h3 className="text-sm text-center font-light my-2 object-cover">{title}</h3>
                </div>
            </div>
    </>
    )};


const NutritionCarousalCard = (props) => {
    return (
        <>
            <NutritionCard {...props}/>
            </>
    )
};


export default NutritionCarousalCard;