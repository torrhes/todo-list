import Badge from '../../atoms/Badge/Badge';
import styles from './TaskCounterItem.module.scss';
interface TaskCounterItemProps {
  title?: string;
  children?: React.ReactNode;
}
export function TaskCounterItem({ title, children }: TaskCounterItemProps) {
  return (
    <div className={styles.counterItem}>
      <p>{title}</p>
      <Badge> {children}</Badge>
    </div>
  );
}
