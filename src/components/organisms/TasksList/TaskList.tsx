import styles from "./TaskList.module.scss";
import { Task } from "../Tasks/Tasks";
import { TasksData } from "../../pages/Todo";
import { Emptylist } from "../../molecules/EmptyList/EmptyList";

interface TaskListProps {
  tasks: TasksData[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newTitle: string) => void;
}

export function TaskList({
  tasks,
  onComplete,
  onDelete,
  onEdit,
}: TaskListProps) {
  return (
    <section className={styles.tasks}>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}

        {tasks.length <= 0 && <Emptylist />}
      </div>
    </section>
  );
}
