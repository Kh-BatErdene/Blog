import React from "react";
import LittleBtn2 from "./LittleBtn2";

function HomeCard(props) {
  return (
    <div className="relative ">
      <img className="m-auto w-[100%] h-[600px] rounded-xl" src={props.img} />
      <div className="absolute bottom-3 left-3 w-[598px] h-[252px] bg-white rounded-xl p-10">
        <LittleBtn2 />
        <h1 className="text-[22px] font-bold">{props.title}</h1>
        <p className="absolute bottom-6 text-[18px] ">{props.date}</p>
      </div>
    </div>
  );
}

export default HomeCard;
