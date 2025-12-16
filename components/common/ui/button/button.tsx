import React, { FC } from "react";

type IButton = {
  button: string;
};

const Button: FC<IButton> = ({ button }) => {
  return (
    <button className="bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer">
      {button}
    </button>
  );
};

export default Button
