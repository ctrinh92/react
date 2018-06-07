export interface IInputProps {
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (fieldName: string, value: string) => void;
    error?: string;
}