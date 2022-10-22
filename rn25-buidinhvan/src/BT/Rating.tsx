import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
type Props = {};

function Rating({}: Props) {
  const [star, setStar] = useState(0);
  let arrayStar = [1, 2, 3, 4, 5];
  return (
    <div>
      {arrayStar?.map((i) => {
        return i <= star ? (
          <AiFillStar
            key={i}
            onClick={() => {
              setStar(i);
            }}
          />
        ) : (
          <AiOutlineStar
            key={i}
            onClick={() => {
              setStar(i);
            }}
          />
        );
      })}
      <span style={{margin:"10px"}}>{star}</span>
    </div>
  );
}

export default Rating;
