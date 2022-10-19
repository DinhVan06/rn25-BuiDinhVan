import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "../BT/Like.module.css";
interface ILikeNode {
  icon?: string;
}

function LikeNode(props: ILikeNode) {
  const [isLike, setIsLike] = useState(false);
  const handleClickLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleClickLike}>
        <FontAwesomeIcon
          className={isLike ? styles.UnLike : styles.Like}
          icon={`${props.icon}` as IconProp}
        />
        <span className={isLike ? styles.UnLike : styles.Like}>
          {isLike ? "Bỏ Thích" : "Thích"}
        </span>
      </button>
    </div>
  );
}

export default LikeNode;
