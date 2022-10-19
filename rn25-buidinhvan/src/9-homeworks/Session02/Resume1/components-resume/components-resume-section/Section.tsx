import React from "react";

import styles from "../components-resume-section/Section.module.css";
import Avatar from "./Avatar";
interface Props {}

function Section(props: Props) {
  return (
    <div className={styles.section}>
      <div className={styles.section_left}>
        <Avatar image={"block-ui-image/2.jpg"} />
      </div>
      <div className={styles.section_right}>

      </div>
    </div>
  );
}

export default Section;
