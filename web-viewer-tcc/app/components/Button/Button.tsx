import React from "react";
import './Button.scss';

export interface ButtonProps {
  label: string;
  disable?: boolean;
  inverse?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <>
        <button>
            {props.label}
        </button>
    </>
  );
};

export default Button;
