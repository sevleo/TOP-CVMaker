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
  value,
}) {
  const [fieldValue, setFieldValue] = useState(value);

  function handleInputChange(e) {
    setFieldValue(e.target.value);
    onChange(e.target.value);
    // console.log(e);
    // if (
    //   (e.target.parentElement.className === "skill-name") &
    //   (e.target.value.length > 21)
    // ) {
    //   e.target.style.width = e.target.value.length + "ch";
    // }
  }

  function handleTextAreaChange(e) {
    setFieldValue(e.target.value);
    onChange(e.target.value);
    e.target.style.height = `${e.target.scrollHeight - 10}px`;
  }

  if (type === "textarea") {
    return (
      <div className={className}>
        <textarea
          value={fieldValue}
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
        value={fieldValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
      <label>{label} </label>
    </div>
  );
}
