import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//Components
import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab/index";

// redux action
import { getRestaurant } from "../Redux/Reducer/Restaurant/Restaurant.action";

const HomeLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurant());
}, []);

    return (
        <>
        <div className="container mx-auto lg:px-28">
        <Navbar />
         {props.children}
        </div>
        <FoodTab />
        </>
    )
};

export default HomeLayout;
