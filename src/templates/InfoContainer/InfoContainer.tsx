import styles from "./InfoContainer.module.scss";

interface InfoContainerProps {
  children?: React.ReactNode;
}

export function InfoContainer({ children }: InfoContainerProps) {
  return <div className={styles.header}>{children}</div>;
}
