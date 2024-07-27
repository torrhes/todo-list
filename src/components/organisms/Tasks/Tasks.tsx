import { useState } from "react";
import styles from "./Tasks.module.scss";
import { Circle, PencilSimple, Trash } from "@phosphor-icons/react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { TasksData } from "../../../pages/Todo";

interface TaskProps {
  task: TasksData;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newTitle: string) => void;
}

export function Task({ task, onComplete, onDelete, onEdit }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <Circle size={20} weight="fill" /> : <div />}
      </button>

      {isEditing ? (
        <Input
          variant="edit"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEdit();
            }
          }}
        />
      ) : (
        <p className={task.isCompleted ? styles.textCompleted : ""}>
          {task.title}
        </p>
      )}

      <Button variant="secondary" onClick={handleEdit}>
        {!isEditing ? <PencilSimple size={32} /> : ""}
      </Button>
      <Button variant="secondary" onClick={() => onDelete(task.id)}>
        <Trash size={32} />
      </Button>
    </div>
  );
}
