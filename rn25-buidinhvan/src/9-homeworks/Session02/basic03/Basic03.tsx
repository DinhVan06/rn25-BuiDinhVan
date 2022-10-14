import React from "react";

import img3 from "../../../9-homeworks/Session02/basic-images/3.jpg";
import "./StyleBasic03.css"
type Props = {};

function Basic03({}: Props) {
  return (
    <>
      <div className="basic3">
        <div className="img__basic3">
          <img src={img3} alt="" />
        </div>
        <div className="content_basic3">
          <p className="content">Technology</p>
          <p className="product_name">Harman Kadon Onyx Studio Mini, Reviews & Expreriences </p>
          <span>Feb 21, 2021 by</span>
          <span className="dr"> drfurion</span>
        </div>
      </div>
    </>
  );
}

export default Basic03;
