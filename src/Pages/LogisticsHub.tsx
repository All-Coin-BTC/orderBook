import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function LogisticsHub() {
  return (
    <div className="page-container flex bg-gray-100">
      <div className="supplier-hub-container flex flex-col items-start lg:px-24  mr-auto w-10/12  bg-gray-100">
        <div className="top-row flex justify-between items-center w-full mt-12  border-b-gray-300 border-b pb-4">
          <p className="lg:text-3xl text-xl text-center ">Logistics Hub</p>
          <div className="settings-and-help-container flex items-center gap-3">
            <button className="border rounded border-gray-300   opacity-75 lg:py-4 lg:px-8 py-2 px-4">Help</button>
            <button className="border rounded border-gray-300  opacity-75 lg:py-4 lg:px-8 py-2 px-4 ">
              <img src="setting.png" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="cards-grid grid 2xl:grid-cols-3 xl:grid-cols-2 grid-rows-2 gap-8 mt-16 w-full justify-items-center ">
          <div className="generate-request-container p-8 rounded-sm items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-orange-200">
                <img src="create-order.png" className="w-24 p-4" />
              </div>
              <div className="request-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Potential Orders</p>
                <p className="text-center font-light text-lg">
                  Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached,
                  your order will be moved to the logistics book where it can be fulfilled.
                </p>
              </div>
            </div>
            <Link to="/supplier-generate-step-one">
              <button className="ard-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
                Enter
              </button>
            </Link>
          </div>
          <div className="view-orders-request-container  p-8 rounded-sm items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-green-500">
                <img src="inTransit.png" className="w-24 p-4" />
              </div>
              <div className="orders-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Your Transport Orders</p>
                <p className="text-center font-light text-lg">
                  View orders that warehouses have sent to you. You can agree to the order terms or propose a counter offer.
                  Once accepted the order will be pushed to the logistics book for fulfillment.
                </p>
              </div>
            </div>
            <Link to="/warehouse-orders">
              <button className="card-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
                Enter
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

// <div className="logistics-hub-container flex flex-col items-center">
// <div className="logistics-title mt-8">
//   <p className="text-3xl text-center ">Welcome to the Logistics Hub</p>
//   <p className="text-base text-center font-light mt-8">What do you want to do?</p>
// </div>

// <Link to="/logistics-potential-orders">
//   <div className="generate-request-container mt-4 p-8 rounded-2xl ">
//     <div className="request-title">
//       <p className="text-2xl text-center">View Potential Orders</p>
//       <p className="text-center font-light">See which deals need transport</p>
//     </div>
//   </div>
// </Link>
// <Link to="/logistics-delivery-orders">
//   <div className="generate-request-container mt-4 p-8 rounded-2xl ">
//     <div className="request-title">
//       <p className="text-2xl text-center">View Your Transport Orders</p>
//       <p className="text-center font-light">Browse the orders you are responsible for completing</p>
//     </div>
//   </div>
// </Link>
// </div>

// <div className="page-container flex bg-gray-100">
//       <div className="logistics-hub-container flex flex-col items-start px-24 mr-auto w-10/12  bg-gray-100">
//         <div className="top-row flex justify-between items-center w-full mt-12  border-b-gray-300 border-b pb-4">
//           <p className="text-3xl text-center ">Logistics Hub</p>
//           <div className="settings-and-help-container flex items-center gap-3">
//             <button className="border rounded border-gray-300   opacity-75 py-4 px-8 ">Help</button>
//             <button className="border rounded border-gray-300  opacity-75 py-4 px-4 ">
//               <img src="setting.png" className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//         <div className="cards-grid grid grid-cols-3 grid-rows-2 gap-8 mt-16 w-full justify-items-center ">
//           <div className="generate-request-container p-8 rounded-sm items-center flex flex-col justify-between">
//             <div className="top-contents flex flex-col items-center">
//               <div className="card-image-container rounded-full bg-orange-200">
//                 <img src="orders.png" className="w-24 p-4" />
//               </div>
//               <div className="request-title  mt-4 flex flex-col gap-12">
//                 <p className="text-2xl text-center font-bold ">View Potential Orders</p>
//                 <p className="text-center font-light text-lg">
//                   Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached,
//                   your order will be moved to the logistics book where it can be fulfilled.
//                 </p>
//               </div>
//             </div>
//             <Link to="/logistics-potential-orders">
//               <button className="card-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
//                 Enter
//               </button>
//             </Link>
//           </div>
//           <div className="view-orders-request-container  p-8 rounded-sm items-center flex flex-col justify-between">
//             <div className="top-contents flex flex-col items-center">
//               <div className="card-image-container rounded-full bg-green-500">
//                 <img src="browse.png" className="w-24 p-4" />
//               </div>
//               <div className="orders-title  mt-4 flex flex-col gap-12">
//                 <p className="text-2xl text-center font-bold ">View Your Transport Orders</p>
//                 <p className="text-center font-light text-lg">
//                   View orders that warehouses have sent to you. You can agree to the order terms or propose a counter offer.
//                   Once accepted the order will be pushed to the logistics book for fulfillment.
//                 </p>
//               </div>
//             </div>
//             <Link to="/logistics-delivery-orders">
//               <button className="card-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
//                 Enter
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Sidebar />
//     </div>
