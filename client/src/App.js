// import logo from './logo.svg';
// import './App.css';

// //HOC
// import HomeLayoutHOC from './HOC/Home.HOC';
// import RestaurantLayoutHOC from './HOC/Restaurant.HOC';

// //Component
// import { Temp } from './Components/temp';
// // import Master from './Components/master';

// //Pages
// import Home from './Page/Home';
// import { Route, Redirect } from 'react-router-dom';

// function App() {
//   return (
//   <>
//     <Route path="/" exact>
//       <Redirect to="/delivery" />
//     </Route>
//     {/* <HomeLayoutHOC path="/" exact component={Temp} /> */}
//     <HomeLayoutHOC path="/:type" exact component={Home} />
//     <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
//   </>
//   );
// }

// import React, {useEffect}  from "react";
// import axios from "axios";
// import {Route, Redirect} from "react-router-dom";
// import { useDispatch } from "react-redux";

// //import HOC
// import HomeLayoutHOC from "./HOC/Home.HOC";
// import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
// import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

// //page
// import Home from "./Page/Home";
// import Overview from "./Page/Restaurant/Overview";
// import OrderOnline from "./Page/Restaurant/OrderOnline";
// import Reviews from "./Page/Restaurant/Reviews";
// import Menu from "./Page/Restaurant/Menu";
// import Photos from "./Page/Restaurant/Photos";
// import Checkout from "./Page/checkout";
// import RedirectRestaurant from "./Page/Restaurant/redirect";
// import GoogleAuth from "./Page/GoogleAuth";

// import { getMyself } from "./Redux/Reducer/User/User.action";

// // axios global settings
// if (localStorage.zomatoUser) {
//   const { token } = JSON.parse(localStorage.zomatoUser);
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }


// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (localStorage.zomatoUser) dispatch(getMyself());
//   }, []);

//   return (
//     <>
//     <Route path="/" exact>
//       <Redirect to="/delivery"/>
//     </Route>
//     <Route path="/restaurant/:id" exact component={RedirectRestaurant}/>
      
    
//     < HomeLayoutHOC path="/:type" exact component={ Home } />
//     <HomeLayoutHOC path="/google/:token" exact component={ GoogleAuth }/>
//     <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={ Overview }/>
//     <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={ OrderOnline }/>
//     <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={ Menu }/>
//     <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={ Reviews }/>
//     <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={ Photos }/>
//     <CheckoutLayoutHOC path="/checkout/orders" exact component={ Checkout }/>
//     </>
//   );
// };

// export default App;


import React, {useEffect}  from "react";
import axios from "axios";
import {Route, Redirect} from "react-router-dom";
import { useDispatch } from "react-redux";

//import HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

//page
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import Checkout from "./Page/checkout";
import RedirectRestaurant from "./Page/Restaurant/redirect";
import GoogleAuth from "./Page/GoogleAuth";

import { getMyself } from "./Redux/Reducer/User/User.action";

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  }, []);

  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery"/>
    </Route>
    <Route path="/restaurant/:id" exact component={RedirectRestaurant}/>
      
    
    < HomeLayoutHOC path="/:type" exact component={ Home } />
    <HomeLayoutHOC path="/google/:token" exact component={ GoogleAuth }/>
    <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={ Overview }/>
    <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={ OrderOnline }/>
    <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={ Menu }/>
    <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={ Reviews }/>
    <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={ Photos }/>
    <CheckoutLayoutHOC path="/checkout/orders" exact component={ Checkout }/>
    </>
  );
};

export default App;
