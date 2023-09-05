import React from "react";
import { dummyActivitiesToWarehouse } from "../dummyData/dummyData";
import ActivityCard from "./ActivityCard";
let data = dummyActivitiesToWarehouse;
if (data.length > 10) {
  data = data.slice(0, 10);
}
export default function Sidebar() {
  return (
    <div className="sidebar-container  w-full bg-white items-center">
      <h1 className="side-bar-header title text-3xl font-extralight text-center h-14 mt-12 items-center flex justify-center">
        Activity
      </h1>
      {data.map((item) => {
        return (
          <ActivityCard
            activityId={item.activityId}
            orderId={item.orderId}
            imgCode={item.imgCode}
            actionText={item.actionText}
            subText={item.subText}
          />
        );
      })}
      <div className="btn-container mx-auto flex justify-center items-center">
        <button className="activty-btn mt-8 border rounded border-blue-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out mx-auto ">
          View all Activity
        </button>
      </div>
    </div>
  );
}
