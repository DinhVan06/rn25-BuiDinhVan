
import React, { useState, useEffect } from "react";

interface Ipractive {
  number?: number;
}

function Practive(props: Ipractive) {
  //   const [count, setCount] = useState(0);
  //   const handleNumber = () => {
  //     if (count === 5) {
  //       console.log("không tăng");
  //     } else {
  //       console.log("click handle");
  //       setCount(count + 1);
  //     }
  //   };
console.log('aa')
    useEffect(() => {
      console.log("componentDidMount");
      return () => {
        console.log("componentWillUnmount");
      };
    }, []);
    useEffect(() => {
      console.log("componentDidUpdate");
    });

    // useEffect(() => {
    //   console.log("componentDidUpdate của 1 state");
    // }, [count]);
  const [islike, setIslike] = useState(false);
  const handleClickLike = () => {
    setIslike(!islike);
  };
  return (
    <div style={{ margin: "20px" }}>
      {/* <div>{count}</div>
      <button onClick={handleNumber} disabled={count >= 5 ? true : false}>
        CountClick
      </button> */}
      <button onClick={handleClickLike}>{islike ? "Unlike" : "Like"}</button>
      <br />
      <span>{islike ? 1 : 0}</span>
    </div>
  );
}

export default Practive;
