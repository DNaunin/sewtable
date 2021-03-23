import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ className, label, ...props }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
