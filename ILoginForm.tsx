import { ILoginEntity } from "./ILoginEntity";

export interface ILoginForm {
    loginEntity: ILoginEntity;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
    buttonDisabled: boolean;
    emailErrorMsg?: string;
    passwordErrorMsg?: string;
};