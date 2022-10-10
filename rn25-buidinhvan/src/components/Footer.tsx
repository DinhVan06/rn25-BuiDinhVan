// Functional component: tsrfce

import React from 'react'

type Props = {
    contentFooterProps: string;
    numberFooterProps: number;
}

function Footer(props: Props) {
  return (
    <>
        <footer>Resize the browser window to see how the content respond to the resizing.</footer>
        <p>{props.contentFooterProps}</p>
        <p>{props.numberFooterProps}</p>
    </>
  )
}

export default Footer