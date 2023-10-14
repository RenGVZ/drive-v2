import React from "react";
import type { ButtonInt } from "@/interface";

const Button = ({ btnClass, title, onClick }: ButtonInt) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
