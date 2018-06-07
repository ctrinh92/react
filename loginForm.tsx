import * as React from "react";
import { ILoginEntity, ILoginForm } from "../../interfaces";
import { Button, Input, Password } from "../../common/components/form";

export const LoginForm: React.StatelessComponent<ILoginForm> = (props: ILoginForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <h2 className="panel-header">Login</h2>
                <div className="pandel-body">
                    <Input label="Email"
                        error={props.emailErrorMsg}
                        name="email"
                        value={props.loginEntity.email}
                        onChange={props.onChange}
                        placeholder="Email" />
                    <Password label="Password"
                        error={props.passwordErrorMsg}
                        name="password"
                        value={props.loginEntity.password}
                        onChange={props.onChange}
                        placeholder="Password" />
                    <Button className="btn btn-default"
                        onClick={props.onSave}
                        disabled={props.buttonDisabled}
                        label="Login" />
                </div>
                </div>
        </form>
    );
}