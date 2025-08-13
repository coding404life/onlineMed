import React from "react";

const CodeInput = ({
  value,
  onChange,
  onKeyDown,
  onPaste,
  className = "",
  label,
  type = "text",
  inputMode = "numeric",
  pattern = "[0-9]*",
  ...props
}) => (
  <input
    type={type}
    inputMode={inputMode}
    pattern={pattern}
    value={value}
    maxLength={1}
    className={`w-12 h-12 text-center text-lg font-semibold border border-secondary-gray rounded-xs focus:border-primary-blue focus:shadow-focus focus:outline-none transition-colors ${className}`}
    aria-label={label}
    onChange={onChange}
    onKeyDown={onKeyDown}
    onPaste={onPaste}
    {...props}
  />
);

export default CodeInput;
