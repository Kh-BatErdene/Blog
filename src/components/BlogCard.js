import React from "react";
import styles from "@/app/page.module.css";
import LittleBtn from "./LittleBtn";

function BlogCard(props) {
  return (
    <div className="w-[393px] rounded-md ">
      <div className={styles.blog}>
        <img className="w-[360px] h-[240px] rounded-md " src={props.img} />
        <LittleBtn />
        <h1 className="font-bold text-xl">{props.title} </h1>
        <p className="absolute bottom-6">{props.at}</p>
      </div>
    </div>
  );
}

export default BlogCard;
