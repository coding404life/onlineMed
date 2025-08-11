import { forwardRef } from "react";

const CodeInput = ({ value, ...props }) => {
  return (
    <input
      type="text"
      value={value}
      maxLength={1}
      className="w-12  h-12 text-center text-lg font-semibold border border-secondary-gray rounded-xs focus:border-primary-blue focus:shadow-focus focus:outline-none transition-colors"
      {...props}
    />
  );
};

export default CodeInput;
