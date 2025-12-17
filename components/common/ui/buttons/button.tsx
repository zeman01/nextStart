import React from "react";

type IProps = {
  label?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
};

const Button: React.FC<IProps> = ({
  label = "Button",
  type = "button",
  disabled = false,
}) => {
  return (
    <div className="w-full">
      <button
        disabled={disabled}
        type={type}
        className={`w-full bg-blue-500 p-3 text-white font-bold text-lg rounded mt-5 mb-1 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-500/60`}
      >
        {label}
      </button>
    </div>
  );
};
export default Button;
