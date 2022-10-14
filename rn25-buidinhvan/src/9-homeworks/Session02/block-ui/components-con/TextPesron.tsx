import React from "react";
import styles from "../../../../9-homeworks/Session02/block-ui/Person.module.css";

type Props = {
  name?: string;
  job?: string;
};

function TextPesron(props: Props) {
  return (
    <>
      <div className={styles.personal__name_education}>
        <h6 style={{ fontSize: "13px", fontWeight: "bold" }}>{props.name}</h6>
        <p style={{ fontSize: "12px" }}>{props.job}</p>
      </div>
    </>
  );
}

export default TextPesron;
