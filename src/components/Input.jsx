import { useState } from "react";
import "../styles/Input.css";

export default function Input({
  label,
  placeholder,
  onChange,
  className,
  type,
  rows,
  maxlength,
}) {
  const [value, setValue] = useState("");

  function handleInputChange(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  function handleTextAreaChange(e) {
    setValue(e.target.value);
    const textarea = document.querySelector(".summary textarea");
    textarea.style.height = `${textarea.scrollHeight - 10}px`;
  }

  if (type === "textarea") {
    return (
      <div className={className}>
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={handleTextAreaChange}
          rows={rows}
          maxLength={maxlength}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={className}>
      <input
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
      <label>{label} </label>
    </div>
  );
}
