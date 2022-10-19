import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "../../../../9-homeworks/Session02/block-ui/Person.module.css";

interface Props{
  contactForm?: string;
  communications?: string;
  icon?: string;
};

function ContactBlock(props: Props) {
  return (
    <>
      <div className={styles.personal_contact}>
        <p style={{margin:0}}>{props.contactForm}</p>
        <div style={{ paddingTop: "1px" }}>
          <FontAwesomeIcon icon={`${props.icon}` as IconProp} />
          <span>{props.communications}</span>
        </div>
      </div>
    </>
  );
}

export default ContactBlock;
