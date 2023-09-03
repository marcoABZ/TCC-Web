import React from "react";
import './InputText.scss';

export interface InputTextProps {
  label: string;
  status?: boolean;
  inverse?: boolean;
  placeholder?: string;
  helperText?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

const InputText = (props: InputTextProps) => {

    return (
        <>
            <p>{props.label}</p>
            <input 
                type="text"
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                minLength={props.minLength}
                pattern={props.pattern}
            />
            <p>{props.helperText}</p>
        </>
    );
};

export default InputText;
