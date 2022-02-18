import React from "react";
import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  return [value, setValue];
};

export default useInput;

const onChange = (event) => {
  setValue(event.target.value);
  return <p>{value}</p>;
};
    