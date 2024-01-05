import { useState } from "react";
import "../styles/Input.css";

export default function Input({ label, placeholder, onChange, className }) {
  const [value, setValue] = useState("");

  function handleChnage(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }
  return (
    <label className={className}>
      {label}{" "}
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChnage}
      ></input>
    </label>
  );
}
