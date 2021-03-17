import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={styles.btn} {...props}>
      {label}
    </button>
  );
}

export default Button;
