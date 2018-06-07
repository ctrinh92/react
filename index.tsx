import { ILoginEntity, IRegisterEntity, IHomePageEntity, IFaqEntity } from "../../interfaces";
import { apiExecute } from "../../api/users/apiExecute";

const baseURL = "https://pacoima-ypi.azurewebsites.net/";

export const loginUser = (data: ILoginEntity):Promise<any> => {
    const loginURL = `${baseURL}api/users/login/force`;
    return apiExecute(loginURL, "POST", data);
}

export const registerUser = (data: IRegisterEntity): Promise<any> => {
    const registerURL = `${baseURL}api/users/register/employer`;
    return apiExecute(registerURL, "POST", data)
}

export const user = (): Promise<any> => {
    const userURL = `${baseURL}api/people/currentuser`;
    return apiExecute(userURL, "GET", null)
}

export const logOut = (): Promise<any> => {
    const logOutURL = `${baseURL}api/users/logout`;
    return apiExecute(logOutURL, "GET", null)
}

export const faqGetId = (): Promise<any> => {
    const faqURL = `${baseURL}/api/faqcategories`;
    return apiExecute(faqURL, "GET", null)
}

export const faqPostId = (data: IFaqEntity): Promise<any> => {
    const faqPostURL = `${baseURL}api/faqs`;
    return apiExecute(faqPostURL, "POST", data)
}

export const UserApi = {
    loginUser, registerUser, user, logOut, faqGetId, faqPostId
}