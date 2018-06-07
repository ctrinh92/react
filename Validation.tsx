import { IError } from "../interfaces";

const IError = {
    isNotValid: "",
    errMsg: ""
}

const validateFirstName = (firstName: string): IError => {
    if (firstName.length < 2) {
        return { isNotValid: true, errMsg: "First name too short" };
    }
    return { isNotValid: false, errMsg: "" }

}

const validateLastName = (lastName: string): IError => {
    if (lastName.length < 2) {
        return { isNotValid: true, errMsg: "Last name too short" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validateEmail = (email: string): IError => {
    if (email.length < 0) {
        return { isNotValid: true, errMsg: "Email is too short" };
    } else if (!email.includes("@")) {
        return { isNotValid: true, errMsg: "Email must include '@'" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validatePassword = (password: string): IError => {
    if (password.length < 6) {
        return { isNotValid: true, errMsg: "Password is too short" };
    } else if (!/\d/.test(password)) {
        return { isNotValid: true, errMsg: "Password must include a number" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validateQuestion = (question: string): IError => {
    if (question.length < 2) {
        return { isNotValid: true, errMsg: "Please enter a question" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validateAnswer = (answer: string): IError => {
    if (answer.length < 2) {
        return { isNotValid: true, errMsg: "Please enter an answer" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validateDisplayOrder = (displayOrder: string): IError => {
    if (displayOrder.length == 0) {
        return { isNotValid: true, errMsg: "Please pick an order" };
    }
    return { isNotValid: false, errMsg: "" };
}

const validateCateogry = (category: string): IError => {
    if (category.length < 2) {
        return { isNotValid: true, errMsg: "Please enter a category" };
    }
    return { isNotValid: false, errMsg: "" };
}

export const Validation = {
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateQuestion,
    validateAnswer,
    validateDisplayOrder,
    validateCateogry
}