import React, { useState } from "react";

type Props = {};

function Bai1KiemTraDoiXung({}: Props) {
  let n = "";
  let value = "";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("False");
  const reverse = (value: string) => {
    //1 2 3 4 -> [1,2,3,4] -> [4,3,2,1] -> 4 3 2 1
    return value ? value.split(" ").reverse().join(" ") : "";
  };
  const checkSDX = (value: string) => {
    console.log(value);
    return reverse(value) === value ? true : false;
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputTxt = e.currentTarget.value;

    // tach ra value
    if (inputTxt.includes("\n")) {
      n = inputTxt.split("\n")[0];
      value = inputTxt.split("\n")[1];
      setInput(n + "\n" + (value ? value + " " : ""));
    } else {
      setInput(inputTxt + "\n");
    }   
    // kiem tra so doi xung

    if (checkSDX(value)) {
      setOutput("True");
    } else {
      setOutput("False");
    }
  };
  return (
    <div style={{ margin: "20px" }}>
      <textarea value={input} onChange={handleChange} />
      <h2>{output}</h2>
    </div>
  );
}

export default Bai1KiemTraDoiXung;
