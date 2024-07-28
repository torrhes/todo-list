import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
export default function Button({
  variant = 'primary',
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={`${styles[variant]}`} {...buttonProps}>
      {children}
    </button>
  );
}
