import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import img2 from "../../../9-homeworks/Session02/basic-images/2.jpg";
import "./StyleBasic02.css"
type Props = {

};

function Basic02({}: Props) {
  return (
    <>
      <div className="basic2">
        <div className="img__basic2">
          <img src={img2} alt="" />
        </div>
        <div className="content_basic2">
          <p className="shop">YOUNG SHOP</p>
          <ul>
            <li><FontAwesomeIcon className='checked' icon={faStar} /></li>
            <li><FontAwesomeIcon className='checked' icon={faStar} /></li>
            <li><FontAwesomeIcon className='checked' icon={faStar} /></li>
            <li><FontAwesomeIcon className='checked' icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li>02</li>
          </ul>
          <p className="prosuct_name">SamSung UHD TV 24inch</p>
          <p className="price">$599</p>
        </div>
      </div>
    </>
  );
}

export default Basic02;
