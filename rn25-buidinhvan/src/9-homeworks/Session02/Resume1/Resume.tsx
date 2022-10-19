import React from 'react'
import Header from "../Resume1/components-resume/component-resume-header/Header"
import Section from "../Resume1/components-resume/components-resume-section/Section";
interface Props{}

function Resume(props: Props) {
  return (
    <div>
        <Header/>
        <Section/>
    </div>
  )
}

export default Resume