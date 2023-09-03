'use client'

import React, { FormEventHandler, useState } from "react";
import './InputPassword.scss';

export interface InputPasswordProps {
  label: string;
  status?: boolean;
  inverse?: boolean;
  placeholder?: string;
  helperText?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

const InputPassword = (props: InputPasswordProps, onChange: FormEventHandler) => {
    const [value, setValue] = useState("")

    return (
        <>
            <p>{props.label}</p>
            <div>
                <input 
                    type="password"
                    placeholder={props.placeholder}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    pattern={props.pattern}
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.target.value)
                        onChange(ev)
                    }}
                />
            </div>
            <p>{props.helperText}</p>
        </>
    );
};

export default InputPassword;
