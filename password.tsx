import * as React from "react";
import { IInputProps } from "../../../interfaces";

const formatWrapperClass = (props: IInputProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props: IInputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value);
}

export const Password: React.StatelessComponent<IInputProps> = (props) => {

    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="password"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                />
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    );

}