import { Plus } from "@phosphor-icons/react";
import styles from "./NewTaskForm.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function NewTaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <Input
        placeholder="Add a new task"
        type="text"
        value={title}
        onChange={onChangeTitle}
        variant="add"
      />
      <Button variant="primary">
        Add
        <Plus size={20} />
      </Button>
    </form>
  );
}
