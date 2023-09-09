import { useState } from "react";
import './Input.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
    type: 'text' | 'password' | 'email',
    label?: string,
    placeholder?: string,
    helperText?: string,
    status?: 'error' | 'success', 
    validate?: (value: string) => boolean
}

export const Input = (props: InputProps) => {
    const [value, setValue] = useState("");

    return (
        <>
            <span className="input-container">
                <p className="input-placeholder">{props.placeholder}</p>
                <input 
                    type={props.type}
                    onChange={(e) => setValue(e.target.value)} />
                <p className="helper">{props.helperText}</p>
            </span>
        </>
    );
}