import * as React from "react";
import { RegisterPage } from "./";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { IRegisterEntity, IError } from "../../interfaces";
import { browserHistory } from "react-router";
import { Validation } from "../../common/Validation";

interface IRegisterErrors {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

interface IRegisterState {
    registerEntity: IRegisterEntity
    formErrors: IRegisterErrors;
    isFirstNameValid: boolean;
    isLastNameValid: boolean;
    isPasswordValid: boolean;
    isEmailValid: boolean;
    isFormValid: boolean;
}

const FormErrors: React.StatelessComponent<IRegisterErrors> = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName} {props[fieldName]}</p>
            })}
        </div>
    );
}

export class RegisterPageContainer extends React.Component<{}, IRegisterState>{ //class is an object
    constructor(props) { //constructor is an entry point to the class
        super(props); //this line is pass the properties to the super class aka parent
        this.state = {
            registerEntity: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            isFormValid: false,
            isFirstNameValid: false,
            isLastNameValid: false,
            isPasswordValid: false,
            isEmailValid: false,
            formErrors: { firstName: "", lastName: "", email: "", password: "" }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    private onFieldChange(fieldName: string, fieldValue: string) { //private means it can only access in this class
        const nextState = {
            ...this.state, //... are spread operators meaning its able to copy an array or object without looping
            registerEntity: {
                ...this.state.registerEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue)});
    }

    private validateField(fieldName: string, fieldValue: string) {
        let errorMessage = this.state.formErrors;
        let isFirstNameValid = this.state.isFirstNameValid;
        let isLastNameValid = this.state.isLastNameValid;
        let isEmailValid = this.state.isEmailValid;
        let isPasswordValid = this.state.isPasswordValid;
        switch (fieldName) {
            case "firstName":
                let firstNameErrMsg: IError = Validation.validateFirstName(fieldValue);
                isFirstNameValid = !firstNameErrMsg.isNotValid;
                errorMessage.firstName = firstNameErrMsg.errMsg;
                break;
            case "lastName":
                let lastNameErrMsg: IError = Validation.validateLastName(fieldValue);
                isLastNameValid = !lastNameErrMsg.isNotValid;
                errorMessage.lastName = lastNameErrMsg.errMsg;
                break;
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
        }
        this.setState({ formErrors: errorMessage, isFirstNameValid: isFirstNameValid, isLastNameValid: isLastNameValid, isEmailValid: isEmailValid, isPasswordValid: isPasswordValid }, this.validateForm);
    }

    private validateForm() {
        this.setState({ isFormValid: this.state.isFirstNameValid && this.state.isLastNameValid && this.state.isEmailValid && this.state.isPasswordValid });
    }

    private onSave() {
        UserApi.registerUser(this.state.registerEntity)
            .then((response) => {
                toastr.success("Register Success"); //toastr function will give an alert. green for success and red for error  
                browserHistory.push("/home/index");
            }, (err) => {
                toastr.error("Register Failed");
            })
            .catch((err) => {
                toastr.error("Register Failed");
            });
    }

    public render() {
        return (
            <div>
                <RegisterPage
                    onChange={this.onFieldChange}
                    onSave={this.onSave}
                    buttonDisabled={!this.state.isFormValid}
                    registerEntity={this.state.registerEntity}
                    firstNameErrorMsg={this.state.formErrors.firstName}
                    lastNameErrorMsg={this.state.formErrors.lastName}
                    emailErrorMsg={this.state.formErrors.email}
                    passwordErrorMsg={this.state.formErrors.password}
                />
            </div>
        );
    }
}