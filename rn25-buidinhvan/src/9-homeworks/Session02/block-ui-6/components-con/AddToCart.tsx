import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface Props{
  icon?: string;
  text?: string;
  type?: string;
}

function AddToCart(props: Props) {
  return (
    <button className={`btn btn-${props.type}`}>
      <FontAwesomeIcon icon={`${props.icon}` as IconProp} />
      <span>{props.text}</span>
    </button>
  )
}

export default AddToCart