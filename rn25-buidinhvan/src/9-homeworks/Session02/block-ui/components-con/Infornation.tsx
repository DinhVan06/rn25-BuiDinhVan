import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
type Props = {
    icon:string;
    itemInfo?:string;
    itemInfovalue?:string;
}

function Infornation(props: Props) {
  return (
    <>
          <div style={{fontSize: '10px',borderBottom: '1px dashed'}}>
              <FontAwesomeIcon icon={`${props.icon}` as IconProp} />
              <span style={{paddingLeft: '5px'}}>{props.itemInfo}</span>
              <span style={{float:'right'}}>{props.itemInfovalue}</span>
          </div>
        {/* <div style={{borderBottom: '1px dashed black'}}></div> */}
    </>
  )
}

export default Infornation