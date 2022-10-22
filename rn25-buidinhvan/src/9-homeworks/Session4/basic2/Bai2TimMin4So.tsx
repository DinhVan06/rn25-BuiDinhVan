import React from 'react'

function Bai2TimMin4So() {
    let a = 2, b = 6, c = 3, d = 9;
    let array = [a,b,c,d];
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) 
        {
            min = array[i];
        }
    }
    
  return (
    <div>Bai2TimMin4So</div>
  )
}

export default Bai2TimMin4So