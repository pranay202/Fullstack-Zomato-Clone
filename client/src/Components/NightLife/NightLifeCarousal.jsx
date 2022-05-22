import React from 'react';
import Slider from 'react-slick';
import { NextArrowD, PrevArrowD } from '../Carousal/CarousalArrows';

import { IoMdArrowDropright } from 'react-icons/io';
import { RiSearchLine } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';

//components
import PictureCarousalCard from '../PictureCarousal';


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrowD/>,
        prevArrow: <PrevArrowD />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };

      const categories = [
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
        {
            image: <PictureCarousalCard />
        },
      ]

      const NightlifeSm = () => {
        return(
            <>
              <div className="flex items-center justify-between border-b-2 pb-2 border-gray-100">
                <div className="flex gap-1 text-gray-500 px-2">
                    <span className="h-6 w-6 text-zomato-300"><MdLocationOn className="w-full h-full" /></span>
                    <input type="text" placeholder="Nagpur" className="outline-none"/>
                </div>
                <div className="h-10 w-10 text-gray-600 bg-gray-50 border-2 border-gray-100 flex items-center justify-center rounded-full">
                    <RiSearchLine className="w-5 h-5"/>
                </div>
            </div>
              <div className="flex justify-between">
              <h1 className="text-xl md:text-2xl text-gray-800 mt-2 md:ml-4">Collections</h1>
              <p className="text-xs md:text-2xl text-red-400 flex mt-4">
              All collections in Nagpur 
              <IoMdArrowDropright className="font-black text-lg"/> 
              </p>
              </div>
              <p className="text-xs text-gray-800 font-light p-4 px-0 py-3">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Nagpur, based on trends
              </p>
              
              <div className="flex justify-evenly gap-1 mb-5 overflow-scroll">
            
                       {categories.map((img) => (
                           <PictureCarousalCard {...img}/>
                       ))}
              
              </div>
            <div className="lg:hidden">
                   <img 
                   className="w-full h-full rounded-lg"
                   src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png?output-format=webp"
                   alt="ads"
                   />
            </div>
            </>
        )
    }
    
    const NightlifeLg = () => {
        return(
            <>
            <div className="py-0 px-24 w-6/5">
               <h1 className="text-3xl text-gray-800 font-semibold p-4 px-0 py-1">Collections</h1>
            <div>
            <div className="flex justify-between">
               <p className="text-lg text-gray-800 font-light p-4 px-0 py-3">
               Explore curated lists of top restaurants, cafes, pubs, and bars in Nagpur, based on trends
               </p>
              <div className="flex mr-3 mt-3 text-red-400">
               <p className="text-md">
               All collections in Nagpur 
               </p>
               <IoMdArrowDropright className="pt-1 text-2xl"/> 
               </div>
            </div>
               <Slider {...settings}>
                       {categories.map((img) => (
                           <PictureCarousalCard {...img}/>
                       ))}
                </Slider>
               </div>
            </div>
            </>
        )
    }
    
    const NightLifeCarousal = () => {
        return (
            <>
            <div className="lg:hidden">
             <NightlifeSm />
            </div>
            <div className="hidden lg:block">
             <NightlifeLg />
            </div>
            </>
        )
    };


export default NightLifeCarousal;















// import React from 'react';
// import Slider from 'react-slick';
// import { NextArrow, PrevArrow } from '../Carousal/CarousalArrows';

// //componrnts
// import PictureCarousalCard from '../PictureCarousal';

// const NightLifeCarousal = () => {

//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
             
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               infinite: true,
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//             }
//           }
//         ]
//       };


//     return (
//         <div className="w-full h-full">
//             {
//                 <Slider {...settings}>

//                     <PictureCarousalCard />
//                     <PictureCarousalCard />
//                     <PictureCarousalCard />
//                     <PictureCarousalCard />
//                     <PictureCarousalCard />

//                 </Slider>
//             }
//         </div>
//     )
// }

// export default NightLifeCarousal;