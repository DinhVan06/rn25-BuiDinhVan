import React from "react";
import img1 from "../block-ui-image/1.jpg";
interface Props{
  image?: string;
};

function Avatar(props: Props) {
  return (
    <>
      <div>
        <img
          style={{width: '100%'}}
          src={process.env.PUBLIC_URL + props.image}
          alt=""
        />
      </div>
    </>
  );
}

export default Avatar;
