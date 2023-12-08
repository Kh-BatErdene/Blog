import React from "react";
import styles from "@/app/page.module.css";
import LittleBtn from "./LittleBtn";

function TrendingCard(props) {
  return (
    <div>
      <div>
        <img className="w-[289px] h-[320px] rounded-md " src={props.img} />
        <LittleBtn />
        <h1 className="">{props.title} </h1>
      </div>
    </div>
  );
}

export default TrendingCard;
