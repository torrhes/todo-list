import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
type InputVariant = "add" | "edit";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  placeholder?: string;
  value?: string;
}
export default function Input({
  variant = "edit",
  placeholder,
  value,
  onChange,
  ...inputProps
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles[variant]}`}
      onChange={onChange}
      value={value}
      {...inputProps}
    />
  );
}
