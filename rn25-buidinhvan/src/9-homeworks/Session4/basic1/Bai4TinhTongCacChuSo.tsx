import React from 'react'



function Bai4TinhTongCacChuSo() {
    let n = 2;
    let A = [1,5,5];
    let B = [2,4,5];
    let resultA = 0;
    let resultB = 0;
    for(let i = 0; i < A.length; i++) {
       resultA += A[i];
    }
    for(let i = 0; i < B.length; i++) {
       resultB += B[i];
    }
  return (
    <div>
        {resultA}
        <br />
        {resultB}
    </div>
  )
}

export default Bai4TinhTongCacChuSo