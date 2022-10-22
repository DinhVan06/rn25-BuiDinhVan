import React from 'react'

type Props = {}

function Bai2DemKTrongMang2Chieu({}: Props) {
    let array = [[2,3,4],[2,4,6],[6,4,2]]
    let m = array[0][0], n = array[0][1], k = array[0][2];
    console.log(m, n, k);
    let count = 0;
    for(let i = 1; i < m + 1; i++) {
        for(let j = 0; j < n; j++)
        {
            if(array[i][j] === k)
            {
                count += 1;
            }
        }
    }
    
    
  return (
    <div>
        {count}
    </div>
  )
}

export default Bai2DemKTrongMang2Chieu