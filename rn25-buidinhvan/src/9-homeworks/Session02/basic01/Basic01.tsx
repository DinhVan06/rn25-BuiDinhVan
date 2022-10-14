// tsrfce functional components

import React from "react";

import img1 from "../../../9-homeworks/Session02/basic-images/1.jpg";
import "./StyleBasic01.css";
type Props = {};

function Basic01({}: Props) {
  return (
    <>
      <div>
        <div className="basic1">
          <div className="img__basic1">
            <img className="w-100 h-100" src={img1} alt="" />
          </div>
          <div className="content_basic1">
            <p>Clothing & Apparet</p>
            <span className="product">Accessoeies</span>
            <br />
            <span className="product">Bage</span>
            <br />
            <span className="product">Kid's Fashion</span>
            <br />
            <span className="product">Mens</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic01;
