// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import {MdContentCopy} from "react-icons/md";
// import {FaDirections} from "react-icons/fa";

// //13.350726986617875, 74.7868899618099

// const MapView = (props) => {
//     return (
//         <>
//              <div className="">
//                      <h4 className="text-xl font-medium">Call</h4>
//                      <h5 className="text-zomato-400 font-medium">{props.phone}</h5>
//                      </div>
//                      <div className="">
//                      <h4 className="text-xl font-medium">Direction</h4>
//                      <div className="w-full h-48">
//                      <MapContainer center={props.maplocation} zoom={13} scrollWheelZoom={false}>
//                     <TileLayer
//                         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                     <Marker position={props.maplocation}>
//                         <Popup>
//                         {props.title}
//                         </Popup>
//                     </Marker>
//                     </MapContainer>
//                      </div>
                     
//                      </div>
//                      <p>
//                     {props.address}
//                      </p>
//                      <div className=" flex items-center gap-3">
//                      <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg border-gray-500">
//                          <MdContentCopy />
//                          Copy
//                          </button>
//                          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg border-gray-500">
//                         <span className="text-zomato-400"> <FaDirections /></span>
//                          Direction
//                          </button>
//                      </div>
//         </>
//     )
// }

// export default MapView;