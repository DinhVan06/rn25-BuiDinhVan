import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "../../9-homeworks/Session05/Like.module.css";
interface Props {
  icon?: string;
}

function StarFuntion(props: Props) {
  const [star, setStar] = useState(0);
  const listIconStar = [];
  for (let i = 1; i <= 5; i++) {
    let iconStar = null;
    iconStar = (
      <FontAwesomeIcon
        className={` ${i <= star ? styles.checked : styles.unChecked}`}
        key={i}
        icon={"fa-solid fa-star" as IconProp}
        onClick={() => {
          setStar(i);
        }}
      ></FontAwesomeIcon>
    );
    listIconStar.push(iconStar);
  }
  return (
    <div style={{textAlign:"center"}}>
      {listIconStar}
      <span style={{ margin: "10px" }}>{star}</span>
    </div>
  );
}

export default StarFuntion;
