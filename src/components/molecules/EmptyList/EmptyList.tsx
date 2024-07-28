import { Clipboard } from '@phosphor-icons/react';
import styles from './EmptyList.module.scss';
export function Emptylist() {
  return (
    <section className={styles.empty}>
      <Clipboard size={55} />
      <div>
        <p>You do not have any registered tasks yet.</p>
        <span>Add tasks and organize your to-do items</span>
      </div>
    </section>
  );
}
