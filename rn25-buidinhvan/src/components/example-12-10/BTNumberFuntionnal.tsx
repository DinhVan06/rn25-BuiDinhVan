import React, { useState} from 'react'

type Props = {
    title: string;
}

function BTNumberFuntionnal(props: Props) {
    const { title } = props;
    const [number, setNumber] = useState(0);
    const function1 = () => {
      setNumber(number + 1)
    }
  return (
    <div>
      <p>{title} - {number}</p>
      <button onClick={function1}>Click</button>
    </div>
  )

}

export default BTNumberFuntionnal


