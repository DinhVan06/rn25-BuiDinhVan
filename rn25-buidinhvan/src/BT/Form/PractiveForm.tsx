import React, { useState } from "react";

type Props = {};

function PractiveForm({}: Props) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit")
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.checked);
    setChecked(event.target.checked);
  }
  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        {/* value */}
        <input type="text" onChange={handleChange} value={text} />
        <br />
        {/* checked */}
        <br />
        <input type="checkbox" onChange={handleChangeRadio} checked={checked}/>
        {/* <br />
        <input type="submit" /> */}
        <br />
        <button style={{ marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default PractiveForm;
