import React from "react";
import LittleBtn from "./LittleBtn";

function HomeCard(props) {
  return (
    <div className="relative ">
      <img className="m-auto w-[100%] h-[600px] z-0" src={props.img} />
      <div className="w-[598px] h-[252px] absolute  bottom-[13px] z-10 left-[11px] bg-white rounded-lg p-10">
        <LittleBtn />
        <h1 className="text-2xl font-bold  ">{props.title}</h1>
        <p className="translate-y-[30px]">{props.date}</p>
      </div>
    </div>
  );
}

export default HomeCard;
