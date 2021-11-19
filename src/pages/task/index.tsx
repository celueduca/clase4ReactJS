import React, { Fragment, useState } from "react";
import { ITask } from "../../interfaces/ITask";
import ItemList from "./components/ItemList";
import TaskForm from "./components/TaskForm";

const Task = () => {
  
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <Fragment>
      <TaskForm tasks={tasks} setTasks={setTasks} />

      {tasks.map((task: ITask, i: number) => (
        <ItemList key={i} tasks={tasks} setTasks={setTasks} task={task} index={i} />
      ))}
    </Fragment>
  );
};

export default Task;
