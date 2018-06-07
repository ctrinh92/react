import * as React from "react";
import { IRegisterEntity, IRegisterForm } from "../../interfaces";
import { Button, Input, Password } from "../../common/components/form";

export const RegisterForm: React.StatelessComponent<IRegisterForm> = (props: IRegisterForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <h2 className="panel-header">Register</h2>
                <div className="pandel-body">
                    <Input label="First Name"
                        error={props.firstNameErrorMsg}
                        name="firstName"
                        value={props.registerEntity.firstName}
                        onChange={props.onChange}
                        placeholder="First Name" />
                    <Input label="Last Name"
                        error={props.lastNameErrorMsg}
                        name="lastName"
                        value={props.registerEntity.lastName}
                        onChange={props.onChange}
                        placeholder="Last Name" />
                    <Input label="Email"
                        error={props.emailErrorMsg}
                        name="email"
                        value={props.registerEntity.email}
                        onChange={props.onChange}
                        placeholder="Email" />
                    <Password label="Password"
                        error={props.passwordErrorMsg}
                        name="password"
                        value={props.registerEntity.password}
                        onChange={props.onChange}
                        placeholder="Password" />
                    <Button className="btn btn-default" onClick={props.onSave} disabled={props.buttonDisabled} label="Register" />
                </div>
            </div>
        </form>
        );
}
