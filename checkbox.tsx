// basic checkbox element
// by jason
import * as React from "react";
import { ICheckboxProps } from "../../../interfaces";


export const Checkbox: React.StatelessComponent<ICheckboxProps> = (props) => {

    return (
        <div className={formatWrapperClass(props)}>
            <label>
                <input style={props.style} name={props.name} type="checkbox" className="checkbox" checked={props.checked} onChange={onCheck(props)} />
                {props.label}                
            </label>
        </div>
    );
}

const formatWrapperClass = (props: ICheckboxProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onCheck = (props: ICheckboxProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onCheck(e.target.name, e.target.checked);
}