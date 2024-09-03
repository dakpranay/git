import React from "react";

export default function InputTag({
  type,
  label,
  componentStyle,
  inputStyle,
  placeholder,
  onChange,
  lableVisiblity,
  name,
  disabled,
  value,
}) {
  return (
    <div className={componentStyle}>
      {lableVisiblity && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={label}
        disabled={disabled}
        value={value}
      />
    </div>
  );
}
