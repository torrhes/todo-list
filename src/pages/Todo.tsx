import { Header } from "../templates/Header/Header";
import todoLogo from "../../assets/svg/logo-app.svg";
import { InfoContainer } from "../templates/InfoContainer/InfoContainer";
import { NewTaskForm } from "../molecules/NewTaskForm/NewTaskForm";
import { TaskList } from "../organisms/TasksList/TaskList";
import { useEffect, useState } from "react";
import { TaskCounterItem } from "../molecules/TaskCounterItem/TaskCounterItem";
import { Container } from "../templates/Container/Container";
const LOCAL_STORAGE_KEY = "todo:savedAddTasks";

export interface TasksData {
  id: string;
  title: string;
  isCompleted: boolean;
}
export function Todo() {
  const [tasks, setTasks] = useState<TasksData[]>([]);
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setSaveTasks(newTasks: TasksData[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addNewTask(taskTitle: string) {
    setSaveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setSaveTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setSaveTasks(newTasks);
  }

  function editTaskById(taskId: string, newTitle: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }
      return task;
    });
    setSaveTasks(newTasks);
  }
  return (
    <>
      <Header>
        <img src={todoLogo} />
        <NewTaskForm onAddTask={addNewTask} />
      </Header>
      <InfoContainer>
        <TaskCounterItem title="Tasks created" children={tasksAmount} />
        <TaskCounterItem
          title="Completed"
          children={`${completedTasks} de ${tasksAmount}`}
        />
      </InfoContainer>
      <Container>
        <TaskList
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
          onEdit={editTaskById}
        />
      </Container>
    </>
  );
}
