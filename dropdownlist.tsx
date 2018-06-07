import * as React from "react";
import { IKeyValue, IDropDownListProps } from "../../../interfaces";

const formatWrapperClass = (props: IDropDownListProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props: IDropDownListProps) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.id, e.target.value);
}

export const DropDownList: React.StatelessComponent<IDropDownListProps> = (props) => {

    var options = props.options.map((option) => {
        return (
            <option key={option.key} value={option.key}>{option.value}</option>
        );
    })

    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <select value={props.selectedValue} onChange={onChangeInput(props)} id={props.name} className="form-control">{options}</select>
            </div>
        </div>
    );

}