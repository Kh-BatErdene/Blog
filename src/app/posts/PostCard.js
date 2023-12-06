import React from "react";
import styles from "@/app/page.module.css";

function PostCard(props) {
  return (
    <div>
      <div className={styles.trend}>
        {props.title} {props.img}
      </div>
    </div>
  );
}

export default PostCard;
