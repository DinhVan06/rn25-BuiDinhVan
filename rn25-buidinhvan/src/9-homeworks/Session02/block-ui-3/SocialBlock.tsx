import React from "react";
import styles from "../../../9-homeworks/Session02/block-ui-3/socialBlock.module.css" // <-- import styles to be use
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialBlockProps {
  iconName?: string;
  text?: string;
  total?: number;
  unit?: string;
  color?: string;
}

function SocialBlock(props: SocialBlockProps) {
  
  return (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <div className={styles.icon}>
        <FontAwesomeIcon style={{color: 'white', fontSize: 40}} icon={`${props.iconName}` as IconProp} />
      </div>
      <div className={styles.text}>
        <span>{props.text}</span>
      </div>
      <div className={styles.evaluate}>
        <span>{props.total} </span>
        <span>{props.unit}</span>
      </div>
    </div>
  );
}

export default SocialBlock;
