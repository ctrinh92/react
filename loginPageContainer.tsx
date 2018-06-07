import * as React from "react";
import { LoginPage } from "./";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { ILoginEntity, IError } from "../../interfaces";
import { browserHistory } from "react-router";
import { Validation } from "../../common/Validation";

interface IFormErrors { //holds our error messages
    password: string;
    email: string;
}

interface ILoginState {
    loginEntity: ILoginEntity
    formErrors: IFormErrors;
    isEmailValid: boolean;
    isPasswordValid: boolean;
    isFormValid: boolean;
}

const FormErrors: React.StatelessComponent<IFormErrors> = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName} {props[fieldName]}</p>
            })}
        </div>
    );
}

export class LoginPageContainer extends React.Component<{}, ILoginState>{ //class is an object
    constructor(props) { //constructor is an entry point to the class
        super(props); //this line is pass the properties to the super class aka parent
        this.state = {
            loginEntity: {
                email: "",
                password: ""
            },
            isEmailValid: false, //setting form to blank
            isFormValid: false,
            isPasswordValid: false,
            formErrors: { email: "", password: "" }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    private onFieldChange(fieldName: string, fieldValue: string) { //private means it can only access in this class
        const nextState = {
            ...this.state, //... are spread operators meaning its able to copy an array or object without using a for loop
            loginEntity: {
                ...this.state.loginEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue)}); //this will validate and bind our functions (set the state, validate, execute)
    }

    private validateField(fieldName: string, fieldValue: string) {
        let errorMessage = this.state.formErrors;
        let isEmailValid = this.state.isEmailValid;
        let isPasswordValid = this.state.isPasswordValid;
        switch (fieldName) {
            case "email":
                let emailErrMsg: IError = Validation.validateEmail(fieldValue);
                isEmailValid = !emailErrMsg.isNotValid;
                errorMessage.email = emailErrMsg.errMsg;
                break;
            case "password":
                let passwordErrMsg: IError = Validation.validatePassword(fieldValue);
                isPasswordValid = !passwordErrMsg.isNotValid;
                errorMessage.password = passwordErrMsg.errMsg;
                break;
            default: false;
                break;
        }
        //validate the form then set the state
        this.setState({ formErrors: errorMessage, isPasswordValid: isPasswordValid, isEmailValid: isEmailValid }, this.validateForm);
    }

    private validateForm() {
        this.setState({ isFormValid: this.state.isEmailValid && this.state.isPasswordValid });
    }

    private onSave() {
        UserApi.loginUser(this.state.loginEntity)
            .then((response) => {
                toastr.success("Login Success"); //toastr function will give an alert. green for success and red for error  
                browserHistory.push("/home/index");
            }, (err) => {
                toastr.error("Login Failed");
            })
            .catch((err) => {
                toastr.error("Login Failed");
            });
    }

    public render() {
        //in order to conole.log in here must use {console.log}
        return (
            //we must always include <div> in render
            <div> 
                <LoginPage
                    onChange={this.onFieldChange}
                    onSave={this.onSave}
                    buttonDisabled={!this.state.isFormValid}
                    loginEntity={this.state.loginEntity}
                    emailErrorMsg={this.state.formErrors.email}
                    passwordErrorMsg={this.state.formErrors.password}
                />
            </div>
        );
    }
}