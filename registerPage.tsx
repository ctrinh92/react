import * as React from "react";
import { IRegisterForm } from "../../interfaces";
import { RegisterForm } from "./registerForm";

export const RegisterPage: React.StatelessComponent<IRegisterForm> = (props: IRegisterForm) => {
    return (
        <RegisterForm
            onChange={props.onChange}
            onSave={props.onSave}
            firstNameErrorMsg={props.firstNameErrorMsg}
            lastNameErrorMsg={props.lastNameErrorMsg}
            emailErrorMsg={props.emailErrorMsg}
            passwordErrorMsg={props.passwordErrorMsg}
            registerEntity={props.registerEntity}
            buttonDisabled={props.buttonDisabled} />
        );
}