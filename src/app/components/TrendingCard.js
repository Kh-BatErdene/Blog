import React from "react";
import LittleBtn2 from "./LittleBtn2";

function TrendingCard(props) {
  return (
    <div className="rounded-xl w-[289px] h-[320px]">
      <div className="relative ">
        <img className="w-[289px] h-[320px] rounded-xl" src={props.img} />
        <div className="absolute bottom-0  ">
          <div className="absolute bottom-0  w-[289px] h-[320px] bg-black opacity-50 rounded-xl z-5"></div>
          <div className="absolute bottom-0 p-5 z-10 w-[289px] ">
            <LittleBtn2 />
            <h1 className="text-white font ">{props.title} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
