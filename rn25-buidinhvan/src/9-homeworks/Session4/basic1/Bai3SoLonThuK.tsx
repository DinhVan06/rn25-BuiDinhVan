import React from 'react'

function Bai3SoLonThuK() {
    let array = [6,2]
    let array1 = [91,451,43,3,452,54];
    let n = array[0], k = array[1];
    array1.sort((a,b)=>{
        return b - a;
    });
    console.log(n, k);
    console.log(array1);
    const result = array1[k-1];
  return (
    <div>
        {result}
    </div>
  )
}

export default Bai3SoLonThuK