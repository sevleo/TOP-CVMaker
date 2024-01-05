import { useState } from "react";

export default function Input({ label, placeholder, onChange }) {
  const [value, setValue] = useState("");

  function handleChnage(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }
  return (
    <label>
      {label}{" "}
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChnage}
      ></input>
    </label>
  );
}
