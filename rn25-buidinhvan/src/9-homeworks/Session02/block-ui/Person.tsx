import React from "react";

import styles from "../../../9-homeworks/Session02/block-ui/Person.module.css";
import Avatar from "../block-ui/components-con/Avatar";
import TextPerson from "../block-ui/components-con/TextPesron";
import Infornation from "../block-ui/components-con/Infornation";
import ContactBlock from "../block-ui/components-con/ContactBlock";
type Props = {};

function Person({}: Props) {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgb(247, 249, 249)" }}
    >
      <div className="row">
        <div className="col-3">
          <div className={styles.personal_info}>
            <Avatar image={"block-ui-image/1.jpg"} />
            <TextPerson name="ROBORT PATTISON" job="Developing" />
            <div style={{ marginTop: "10px" }}>
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="DOB"
                itemInfovalue="23/05/2014"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="BG"
                itemInfovalue="B+"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="EDU"
                itemInfovalue="MCA"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="RES"
                itemInfovalue="Bangalore"
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ backgroundColor: "red", width: "100%" }}>
                <ContactBlock
                  contactForm="EMAIL ID"
                  communications="robot12@gmail.com"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#33CC33",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <ContactBlock
                  contactForm="PHONE NO"
                  communications="86655543219"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={styles.personal_info}>
            <div style={{ width: "100%" }}>
              <Avatar image={"block-ui-image/2.jpg"} />
            </div>
            <div className={styles.personal__name_education}>
              <TextPerson name="JAMES SMITH" job="Designer" />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="DOB"
                itemInfovalue="23/05/2014"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="BG"
                itemInfovalue="B+"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="EDU"
                itemInfovalue="MCA"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="RES"
                itemInfovalue="Bangalore"
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ backgroundColor: "#00CCFF", width: "100%" }}>
                <ContactBlock
                  contactForm="EMAIL ID"
                  communications="smith12@gmail.com"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#0033CC",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <ContactBlock
                  contactForm="PHONE NO"
                  communications="8225543219"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={styles.personal_info}>
            <div style={{ width: "100%" }}>
              <Avatar image={"block-ui-image/3.jpg"} />
            </div>
            <div className={styles.personal__name_education}>
              <TextPerson name="TOM HANKS" job="UI Deigner" />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="DOB"
                itemInfovalue="23/05/2014"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="BG"
                itemInfovalue="B+"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="EDU"
                itemInfovalue="MCA"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="RES"
                itemInfovalue="Bangalore"
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ backgroundColor: "#FF6600", width: "100%" }}>
                <ContactBlock
                  contactForm="EMAIL ID"
                  communications="peter1@gmail.com"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFCC00",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <ContactBlock
                  contactForm="PHONE NO"
                  communications="8225543929"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={styles.personal_info}>
            <div style={{ width: "100%" }}>
              <Avatar image={"block-ui-image/4.jpg"} />
            </div>
            <div className={styles.personal__name_education}>
              <TextPerson name="TOM HANKS" job="UI Deigner" />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="DOB"
                itemInfovalue="23/05/2014"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="BG"
                itemInfovalue="B+"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="EDU"
                itemInfovalue="MCA"
              />
              <Infornation
                icon="fa-solid fa-calendar-days"
                itemInfo="RES"
                itemInfovalue="Bangalore"
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ backgroundColor: "#FF6600", width: "100%" }}>
                <ContactBlock
                  contactForm="EMAIL ID"
                  communications="peter1@gmail.com"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFCC00",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <ContactBlock
                  contactForm="PHONE NO"
                  communications="8225543929"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
