import React from "react";
type ActivityCardProps = {
  activityId: number;
  orderId: number;
  imgCode: string;
  actionText: string;
  subText: string;
};
export default function ActivityCard({ activityId, orderId, imgCode, actionText, subText }: ActivityCardProps) {
  return (
    <div
      className="activity-card-container px-4 py-4 mx-4 my-8 rounded-2xl flex  items-center justify-start gap-8  mb-4"
      key={activityId}
    >
      <div
        className={`img-container rounded-full  w-14 h-14 flex justify-center items-center ${
          imgCode === "completed"
            ? "bg-green-300"
            : imgCode === "inTransit"
            ? "bg-yellow-100"
            : imgCode === "onMarket"
            ? "bg-blue-200"
            : ""
        }`}
      >
        <img src={`${imgCode}.png`} className="w-8" />
      </div>
      <div className="text">
        <div className="action-text font-bold text-xs md:text-xl">{actionText}</div>
        <div className="subText font-extralight text-xs md:text-sm text">{subText}</div>
      </div>
    </div>
  );
}
