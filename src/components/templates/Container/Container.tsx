import styles from "./Container.module.scss";
interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <section className={styles.container}>{children}</section>;
}
